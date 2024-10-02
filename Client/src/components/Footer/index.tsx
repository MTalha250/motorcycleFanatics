import Behance from "../../assets/Behance.png"
import Logo from "../../assets/Logo.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="container ">
        <div className="flex flex-col justify-center items-center min-h-[320px] space-y-10 ">

            <motion.ul
            initial={{ opacity: 0, x: -75 , }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-7 para-small flex-wrap">
                <li className="my-2 menu-hover">Home</li>
                <li className="my-2 menu-hover">Just For Members</li>
                <li className="my-2 menu-hover"><Link to='/checkout'>Check Out</Link></li>
                <li className="my-2 menu-hover">About Us</li>
                <li className="my-2 menu-hover">Contact Us</li>
            </motion.ul>

            <div className="flex justify-center items-center space-x-2">
                <img src={Behance} alt="behance " className="icon-hover"/>
                <img src={Behance} alt="behance"  className="icon-hover"/>
                <img src={Behance} alt="behance"  className="icon-hover"/>
                <img src={Behance} alt="behance " className="icon-hover"/>
            </div>

            <img src={Logo} alt="logo" />

            <ul className="flex justify-center items-center space-x-7 para-small md:self-end">
                <li className="menu-hover">Privacy Policy</li>
                <li className="menu-hover">Terms and Conditions</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
