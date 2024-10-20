import AboutUs from "@/components/home/AboutUs";
import CounteriesCovered from "@/components/home/CountriesCovered";
import GetInTouch from "@/components/home/GetInTouch";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/howItWorks";
import NewsLetter from "@/components/home/NewsLetter";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <AboutUs />
      <CounteriesCovered />
      <HowItWorks />
      <NewsLetter />
      <GetInTouch />
    </div>
  );
};

export default Home;
