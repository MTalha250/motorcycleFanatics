import { motion } from "framer-motion"
import { CircleX } from "lucide-react"
interface SearchResultNotAvailableProps {
  setAreaNotAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchResultNotAvailable = ({ setAreaNotAvailable }: SearchResultNotAvailableProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="absolute bottom-0  lg:left-[10%] left-0 z-10">
      <div className="container">
        <div className="px-2 bg-[#f60400f1] lg:max-w-[900px] min-h-[440px] rounded-xl flex flex-col justify-center items-center space-y-4 lg:space-y-6">
          <h2
            className="heading-2 text-center">This Area is Currently  <br />
            Unavailable</h2>
          <p className="para-large text-center px-4">Unfortunately, this area has already been secured by someone else. But don't worry! You can subscribe to our updates to get notified when new areas become available.</p>
          <button className="btn-hover bg-white py-3 px-2 lg:w-[270px] text-primary rounded-[8px] text-lg font-bold  ">
            Subscribe to Updates
          </button>
          <CircleX size={30} strokeWidth={2} className="btn-hover hover:cursor-pointer" onClick={() => setAreaNotAvailable(false)} />
        </div>
      </div>
    </motion.div>
  )
}

export default SearchResultNotAvailable
