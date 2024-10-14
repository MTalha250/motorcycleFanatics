import arrowDown from "../../../assets/arrow-down.svg";
import Locator from "@/components/Locator";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SearchResultNotAvailable from "@/pages/searchResultNotAvailable";


const HowItWorks = () => {
  const navigate = useNavigate();
  const [areaNotAvailabe, setAreaNotAvailable] = useState<boolean>(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  
const AreaNotAvailable = () => {
  return (
    <div>
      <SearchResultNotAvailable  setAreaNotAvailable={setAreaNotAvailable}/>
    </div>
  )
}


  const handleLocationSet = (location: { lat: number; lng: number }) => {
    setLocation(location);
  };

  const handleSearch = () => {
    if (!location) {
      toast.error("Please select a location first");
      setAreaNotAvailable((prev) => !prev);
      return;
    }
    navigate(`/our-plan/${location.lat}/${location.lng}`);
  };

  return (
    <div className="container py-10">
      <div className="flex flex-col justify-center items-center space-y-16 relative">
        <h2 className="heading-2 text-primary capitalize">How it works</h2>

        <div className="flex flex-col lg:gap-20 gap-24">
          <div className="relative ms:0 lg:-ms-16 bg-white max-w-[850px] lg:px-7 lg:py-4 py-3 px-5 rounded-full outline-4 outline-dotted outline-primary">
            <p className="para-medium text-primary !font-medium">
              Enter the first two digits of your postcode to search for
              availability in your region.
            </p>
            <img
              className="absolute top-10 left-0"
              src={arrowDown}
              alt="arrow"
            />
          </div>

          <div className="ms-10 lg:ms-0  relative bg-white max-w-[850px] lg:px-7 lg:py-4 py-3 px-5 rounded-full outline-4 outline-dotted outline-primary">
            <p className="para-medium text-primary !font-medium">
              Enter the first two digits of your postcode to search for
              availability in your region.
            </p>
            <img
              className="absolute top-10 left-2"
              src={arrowDown}
              alt="arrow"
            />
          </div>

          <div className="ms-28 lg:ms-20 -mt-5 md:mt-0 bg-white max-w-[850px] py-3 px-6 lg:px-7 lg:py-4  rounded-full outline-4 outline-dotted outline-primary">
            <p className="para-medium text-primary !font-medium">
              Enter the first two digits of your postcode to search for
              availability in your region.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-end md:items-start space-x-8 space-y-5 ">
          <h3 className="w-full md:w-1/2 heading-3 text-primary">
            Enter the first two digits of your postcode
          </h3>
          <form action="#" className="md:w-1/2 w-full container">
            <Locator setLocation={handleLocationSet} />
          </form>
        </div>

        <button
          onClick={handleSearch}
          className="bg-primary py-2 px-12 lg:py-4 lg:px-10 text-white rounded-2xl text-xl font-semibold btn-primary-hover"
        >
          Search Now
        </button>
        <div className="h-0">
          {areaNotAvailabe && <AreaNotAvailable />}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
