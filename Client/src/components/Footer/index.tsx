import Behance from "../../assets/Behance.png"
import Logo from "../../assets/Logo.png"

const Footer = () => {
  return (
    <div className="container ">
        <div className="flex flex-col justify-center items-center min-h-[320px] space-y-10 ">

            <ul className="flex justify-center items-center space-x-7 para-small flex-wrap">
                <li className="my-2">Home</li>
                <li className="my-2">Just For Members</li>
                <li className="my-2">Check Out</li>
                <li className="my-2">About Us</li>
                <li className="my-2">Contact Us</li>
            </ul>

            <div className="flex justify-center items-center space-x-2">
                <img src={Behance} alt="behance" />
                <img src={Behance} alt="behance" />
                <img src={Behance} alt="behance" />
                <img src={Behance} alt="behance" />
            </div>

            <img src={Logo} alt="logo" />

            <ul className="flex justify-center items-center space-x-7 para-small md:self-end">
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
