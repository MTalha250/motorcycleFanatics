import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Stripe type import
import { StripeCardElement } from "@stripe/stripe-js";

// Load the Stripe library
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string
);

// Define the component props for the PaymentForm
interface PaymentFormProps {
  planId: number;
  price: number;
  longitude: string;
  latitude: string;
  token: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  planId,
  price,
  longitude,
  latitude,
  token,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError("Card information is not available.");
      setLoading(false);
      return;
    }

    // Create Payment Method
    const { error: paymentError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card: cardElement as StripeCardElement,
      });

    if (paymentError) {
      setError(
        paymentError.message ||
          "An error occurred while processing your payment"
      );
      setLoading(false);
      return;
    }

    try {
      // Send the payment method and subscription details to the backend
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URI}/subscribe`,
        {
          plan_id: planId,
          amount_paid: price,
          longitude: longitude,
          latitude: latitude,
          stripe_token: paymentMethod?.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message || "Subscribed successfully");
        navigate("/");
      } else {
        setError(response.data.error || "Subscription failed");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#ffffff",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#ff4d4f",
        iconColor: "#ff4d4f",
      },
    },
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-8 bg-gray-900 shadow-lg rounded-lg border border-gray-700"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-100 mb-6">
        Subscribe to Plan
      </h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-6">
        <label
          htmlFor="card-element"
          className="block text-sm font-medium text-gray-400 mb-2"
        >
          Card Information
        </label>
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-600 focus-within:border-primary transition-all duration-300">
          <CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !stripe}
        className={`w-full py-3 px-4 rounded-md font-bold text-white bg-primary shadow-md  focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 transition-all duration-300 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Processing..." : "Subscribe Now"}
      </button>
    </form>
  );
};

// Wrap PaymentForm with Elements provider
const WrappedPaymentForm: React.FC<PaymentFormProps> = (props) => (
  <Elements stripe={stripePromise}>
    <PaymentForm {...props} />
  </Elements>
);

export default WrappedPaymentForm;
