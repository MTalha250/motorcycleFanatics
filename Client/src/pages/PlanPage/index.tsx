import CheckoutHero from "@/components/Checkout/CheckoutHero";
import Pricing from "@/components/Checkout/Pricing";
import GetInTouch from "@/components/home/GetInTouch";
import NewsLetter from "@/components/home/NewsLetter";
import { useEffect } from "react";

const PlanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CheckoutHero />
      <Pricing />
      <NewsLetter />
      <GetInTouch />
    </div>
  );
};

export default PlanPage;
