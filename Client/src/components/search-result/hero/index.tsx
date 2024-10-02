import Globe from "../../../assets/Globe.png"
import { motion } from "framer-motion"

const SearchHero = () => {
    return (
        <div>
            <div className="bg-primary h-[100px] flex justify-center items-center">
                <h1 className="heading-3 text-center px-3">Search Area (using postal code)</h1>
            </div>
            <div className="bg-white flex flex-col min-h-[600px] items-center justify-center space-y-10">
                <motion.form
                    initial={{ opacity: 0, y: 75, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    action="" className="flex flex-col md:flex-row justify-center items-center w-full px-5 md:px-32 gap-5">
                    <input type="text" placeholder="Enter Your Email" className="placeholder-gray-500 w-full min-w-[300px] md:max-w-[540px] px-4 bg-[#D9D9D9] py-3 rounded-lg outline-none text-gray-800 font-semibold focus:outline-2 focus:outline-primary" />
                    <button className="bg-primary text-white font-semibold px-4 py-3 md:px-6 rounded-xl btn-primary-hover">Search Now</button>
                </motion.form>
                <img src={Globe} alt="Globe" className="w-[300px] md:w-[350px]" />
            </div>
        </div>
    )
}

export default SearchHero
