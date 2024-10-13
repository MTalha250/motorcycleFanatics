import cardIcon from "../../../assets/card-icon.svg";
import CheckCircle from "../../../assets/Tick.svg";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
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

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: -75, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center bg-[#2E2E30] md:w-[410px] rounded-2xl py-10 space-y-7"
        >
          <p className="para-medium">Gold</p>
          <div className="h-[88px] w-[88px] bg-primary rounded-full flex justify-center items-center">
            <img src={cardIcon} alt="cardIcon" />
          </div>
          <h2 className="heading-2">$99</h2>
          <ul className="space-y-3 px-10 flex flex-col justify-end items-center md:ms-5">
            <li className="flex justify-center items-center gap-3">
              <img src={CheckCircle} alt="check circle" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="flex justify-center items-center gap-3">
              <img src={CheckCircle} alt="check circle" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="flex justify-center items-center gap-3">
              <img src={CheckCircle} alt="check circle" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <button className="bg-primary px-5 py-3 rounded-[8px] btn-primary-hover">
            Select our Plan <MoveRight className="ms-1 inline" />
          </button>
        </motion.div>

        <p className="para-medium text-center">All prices are in EUR.</p>
      </div>
    </div>
  );
};

export default Pricing;
