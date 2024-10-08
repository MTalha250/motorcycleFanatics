import arrowDown from "../../../assets/arrow-down.svg"
import { motion } from "framer-motion"
const HowItWorks = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-col justify-center items-center space-y-16">
        <h2 className="heading-2 text-primary capitalize">How it works</h2>

        <motion.div
        initial={{ opacity: 0, x: -75 , }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        viewport={{ once: true }}
        className="flex flex-col lg:gap-20 gap-24">
          <div className="relative ms:0 lg:-ms-16 bg-white max-w-[850px] lg:px-7 lg:py-4 py-3 px-5 rounded-full outline-4 outline-dotted outline-primary">
            <p className="para-medium text-primary !font-medium">
              Enter the first two digits of your postcode to search for availability in your region.
            </p>
            <img className="absolute top-10 left-0" src={arrowDown} alt="arrow" />
          </div>

          <div className="ms-10 lg:ms-0  relative bg-white max-w-[850px] lg:px-7 lg:py-4 py-3 px-5 rounded-full outline-4 outline-dotted outline-primary">
            <p className="para-medium text-primary !font-medium">
              Enter the first two digits of your postcode to search for availability in your region.
            </p>
            <img className="absolute top-10 left-2" src={arrowDown} alt="arrow" />
          </div>

          <div className="ms-28 lg:ms-20 -mt-5 md:mt-0 bg-white max-w-[850px] py-3 px-6 lg:px-7 lg:py-4  rounded-full outline-4 outline-dotted outline-primary">
            <p className="para-medium text-primary !font-medium">
              Enter the first two digits of your postcode to search for availability in your region.
            </p>
          </div>

        </motion.div>

        <div className="flex md:flex-row flex-col justify-center items-end md:items-start space-x-8 space-y-5">
          <h3 className="w-full md:w-1/2 heading-3 text-primary">Enter the first two digits of your postcode</h3>
          <form action="#" className="md:w-1/2 w-full container">
            <input type="text" className="w-full px-2 py-4 rounded-2xl outline-none text-primary font-semibold focus:outline-2 focus:outline-primary"/>
          </form>
        </div>

        <button className="bg-primary py-2 px-12 lg:py-4 lg:px-10 text-white rounded-2xl text-xl font-semibold btn-primary-hover">Search Now</button>
      </div>
    </div>
  )
}

export default HowItWorks
