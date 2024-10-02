import SearchHero from "@/components/search-result/hero"
import { motion } from "framer-motion"

const SearchResultAvailable = () => {
  return (
    <div className="relative overflow-x-hidden">
      <SearchHero/>
      <div className="container absolute top-[20%] lg:left-[8%]">
        <div className="px-3 bg-[#f60400b0] lg:max-w-[900px] min-h-[440px] rounded-xl flex flex-col justify-center items-center space-y-4 lg:space-y-6">
            <motion.h2
            initial={{ opacity: 0, y: 75 , scale:0.6}}
            whileInView={{ opacity: 1, y: 0 , scale:1}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="heading-2 text-center">Great News! <br />
            Your Area Is Available.</motion.h2>
            <p className="para-large text-center">There have been 101 searches in the last 3 days for this region.</p>
            <button className="btn-hover bg-white py-3 px-4 w-[270px] text-primary rounded-[8px] text-lg font-bold  ">
            Search Area Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchResultAvailable
