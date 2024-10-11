import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { ErrorBoundary } from "react-error-boundary";

// Configuration
const CONFIG = {
  API_KEY: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  COUNTRIES: ["DE", "AT", "CH"],
  DEBOUNCE_TIME: 300,
};

// Types
interface Location {
  lat: number;
  lng: number;
}

interface LocatorProps {
  initialValue?: string;
  setLocation?: (location: Location) => void;
}

// Custom hook for loading Google Maps API
function useGoogleMapsAPI() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!window.google && !document.querySelector("#google-maps")) {
      const script = document.createElement("script");
      script.id = "google-maps";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      script.onerror = () => setError("Failed to load Google Maps API");
      document.body.appendChild(script);
    } else if (window.google) {
      setIsLoaded(true);
    }
  }, []);

  return { isLoaded, error };
}

// Custom debounce function
function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };
}

// Error Fallback component
const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

// Main Locator component
const Locator: React.FC<LocatorProps> = ({
  initialValue = "",
  setLocation,
}) => {
  const [address, setAddress] = useState(initialValue);
  const [predictions, setPredictions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const autocompleteService =
    useRef<google.maps.places.AutocompleteService | null>(null);
  const { isLoaded, error: apiError } = useGoogleMapsAPI();

  useEffect(() => {
    if (apiError) {
      setError(apiError);
    }
  }, [apiError]);

  useEffect(() => {
    if (isLoaded && !autocompleteService.current) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
  }, [isLoaded]);

  const onPredictionSelect = useCallback(
    (prediction: google.maps.places.AutocompletePrediction) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { address: prediction.description },
        (results, status) => {
          if (
            status === window.google.maps.GeocoderStatus.OK &&
            results &&
            results[0]
          ) {
            const location = results[0].geometry.location;
            setLocation?.({ lat: location.lat(), lng: location.lng() });
            setAddress(prediction.description);
            setShowPredictions(false);
          } else {
            setError("Geocoding failed. Please try again.");
          }
        }
      );
    },
    [setLocation]
  );

  const fetchPredictions = useCallback((input: string) => {
    if (input.length > 1 && autocompleteService.current) {
      setIsLoading(true);
      setNoResults(false);
      setError(null);

      autocompleteService.current.getPlacePredictions(
        {
          input,
          types: ["(regions)"],
          componentRestrictions: { country: CONFIG.COUNTRIES },
        },
        (results, status) => {
          setIsLoading(false);

          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results
          ) {
            const postalCodePredictions = results.filter((prediction) =>
              /\b\d{2,}\b/.test(prediction.description)
            );

            if (postalCodePredictions.length > 0) {
              setPredictions(postalCodePredictions);
              setShowPredictions(true);
            } else {
              setNoResults(true);
              setPredictions([]);
            }
          } else if (
            status ===
            window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS
          ) {
            setNoResults(true);
            setPredictions([]);
          } else {
            setError("An error occurred while fetching predictions");
            setPredictions([]);
          }
        }
      );
    } else {
      setPredictions([]);
      setNoResults(false);
    }
  }, []);

  const debouncedFetchPredictions = useMemo(
    () => debounce(fetchPredictions, CONFIG.DEBOUNCE_TIME),
    [fetchPredictions]
  );

  useEffect(() => {
    debouncedFetchPredictions(address);
  }, [address, debouncedFetchPredictions]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex < predictions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      onPredictionSelect(predictions[selectedIndex]);
    }
  };

  return (
    <div className="relative">
      <input
        id="postcode"
        className="w-full px-2 py-4 rounded-2xl outline-none text-primary font-semibold focus:outline-2 focus:outline-primary"
        placeholder="Enter postcode"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(() => setShowPredictions(false), 200)}
        aria-label="Enter postcode"
        aria-autocomplete="list"
        aria-controls="predictions-list"
        aria-expanded={showPredictions}
        aria-activedescendant={
          selectedIndex >= 0 ? `prediction-${selectedIndex}` : undefined
        }
      />

      {showPredictions && (
        <ul
          id="predictions-list"
          className="absolute text-black bg-white border border-gray-300 rounded-md shadow-md w-full mt-1 z-10 max-h-60 overflow-y-auto"
          role="listbox"
        >
          {isLoading && (
            <li className="p-4 text-center">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </li>
          )}
          {noResults && (
            <li className="p-2 text-center">No postal code found</li>
          )}
          {error && <li className="p-2 text-center text-red-500">{error}</li>}
          {predictions.map((prediction, index) => (
            <li
              key={prediction.place_id}
              id={`prediction-${index}`}
              className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer ${
                index === selectedIndex ? "bg-gray-200" : ""
              }`}
              onClick={() => onPredictionSelect(prediction)}
              onMouseEnter={() => setSelectedIndex(index)}
              role="option"
              aria-selected={index === selectedIndex}
            >
              <span className="mr-2 text-primary" aria-hidden="true">
                📍
              </span>
              {prediction.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Wrapped Locator component with ErrorBoundary
const WrappedLocator: React.FC<LocatorProps> = (props) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Locator {...props} />
  </ErrorBoundary>
);

export default WrappedLocator;
