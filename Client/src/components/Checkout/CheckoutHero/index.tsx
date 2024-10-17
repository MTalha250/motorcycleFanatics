import Background from "../../../assets/hero-background.png";
import { motion } from "framer-motion";

const CheckoutHero = () => {
  return (
    <div
      className="min-h-[600px]  relative bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="absolute inset-0 bg-[#F60500] opacity-45 z-[1] h-full"></div>
      <motion.div
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        viewport={{ once: true }}
        className="container w-full flex flex-col justify-center items-center z-[2] relative space-y-5 md:px-10"
      >
        <h1 className="heading-1 text-white text-center italic">
          Selected Area is Available
        </h1>
        <p className="para-medium text-primary italic !font-medium bg-white px-2 py-1 rounded-[3px]">
          This area got{" "}
          <span className="font-bold">
            {Math.floor(100 + Math.random() * 500)}
          </span>{" "}
          seraches in the last 7 days
        </p>
        <p className="para-large text-white text-center md:px-24 lg:px-52">
          Complete your subscription and be part of our network. Choose your
          preferred payment method below.
        </p>
      </motion.div>
    </div>
  );
};

export default CheckoutHero;
