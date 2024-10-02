import Germany from "../../assets/hero-background.png";
import Google from "../../assets/google.png"
import Apple from "../../assets/apple.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Login = () => {
  return (
    <div className="bg-white  text-black">
      <div className="flex flex-col lg:flex-row h-full">

        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-10 font-poppins">
          <p className="text-3xl font-semibold mb-6">Welcome Back</p>

          {/* Form Fields */}
          <motion.form
          initial={{ opacity: 0, x: -75 , scale:0.99}}
          whileInView={{ opacity: 1, x: 0 , scale:1}}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="space-y-6 ">
            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="name" className="w-full lg:w-1/3 text-lg font-semibold">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-primary"
              />
            </div>

            <div className="flex flex-col items-start justify-center space-y-2">
              <label htmlFor="name" className="w-full lg:w-1/3 text-lg font-semibold">
                Password
              </label>
              <input
                required
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-primary"
              />
            </div>

            {/* Terms and conditions */}
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                Remember for 30 days
              </label>
            </div>

            {/* Sign Up Button */}
            <button className="btn-primary-hover w-full bg-primary text-white py-2 rounded-full font-semibold text-lg">
              Sign Up
            </button>
          </motion.form>

          <div className="my-6 text-center text-sm">OR</div>

          {/* Social Sign Up Buttons */}
          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="btn-hover w-full border-2 border-gray-400 text-black py-3 rounded-3xl font-semibold">
            <img src={Google} alt="google" className="w-[35px] inline"/>
              Sign Up with Google
            </button>
            <button className="btn-hover w-full border-2 border-gray-400 text-black py-3 rounded-3xl font-semibold">
                <img src={Apple} alt="apple" className="inline w-[35px]"/>
              Sign Up with Apple
            </button>
          </div>

          {/* Sign In Link */}
          <div className="mt-6 text-center text-sm font-medium">
            Don't have an account?{" "}
            <Link to="/signup" className="btn-hover text-primary font-semibold">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Right side with background image */}
        <div
          className="w-full lg:w-1/2 lg:rounded-s-3xl min-h-[300px]"
          style={{
            backgroundImage: `url(${Germany})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
