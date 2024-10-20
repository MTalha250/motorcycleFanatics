import cardIcon from "../../../assets/card-icon.svg";
import CheckCircle from "../../../assets/Tick.svg";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { Plan } from "@/types";
import { useParams, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/authStore";
import toast from "react-hot-toast";
import WrappedPaymentForm from "./paymentForm";

const Pricing: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { lat, lng } = useParams<{ lat: string; lng: string }>();
  const { user, token } = useAuthStore();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<null | {
    id: number;
    price: number;
  }>(null);

  const fetchPlans = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URI}/plans`
      );
      setPlans(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleSubscribe = (id: number, price: number) => {
    if (!user) {
      toast.error("Please login to subscribe");
      navigate("/login");
      return;
    }
    setSelectedPlan({ id, price });
  };

  return (
    <div className="container my-10">
      <div className="flex flex-col justify-center items-center space-y-12">
        <h3 className="heading-3 relative">
          PRICING
          <span className="absolute -bottom-1 left-5 w-[90px] border-b-2 border-primary"></span>
        </h3>

        <p className="para-medium text-center md:px-24 lg:px-48">
          We offer secure payment methods including PayPal, credit card, and
          Klarna. Your subscription will automatically renew every month, and
          you can cancel at any time.
        </p>
        <div className="flex gap-5">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, x: -75, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.3, delay: 0.25 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center bg-[#2E2E30] md:w-[410px] rounded-2xl py-10 space-y-7"
            >
              <p className="para-large">{plan.title}</p>

              <div className="h-[88px] w-[88px] bg-primary rounded-full flex justify-center items-center">
                <img src={cardIcon} alt="cardIcon" />
              </div>
              <h2 className="heading-3">€ {plan.price} / month</h2>
              <ul className="space-y-3 px-10 flex flex-col justify-end items-start md:ms-5">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex justify-center items-center gap-3"
                  >
                    <img src={CheckCircle} alt="check circle" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSubscribe(plan.id, plan.price)}
                disabled={loading}
                className="bg-primary px-5 py-3 rounded-[8px] btn-primary-hover"
              >
                {loading ? (
                  "Loading..."
                ) : (
                  <>
                    Subscribe this Plan <MoveRight className="ms-1 inline" />
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
        <p className="para-medium text-center">All prices are in EUR.</p>

        {selectedPlan && (
          <WrappedPaymentForm
            planId={selectedPlan.id}
            planName={
              plans.find((plan) => plan.id === selectedPlan.id)?.title || "Plan"
            }
            price={selectedPlan.price}
            longitude={lng || ""}
            latitude={lat || ""}
            token={token || ""}
          />
        )}
      </div>
    </div>
  );
};

export default Pricing;
