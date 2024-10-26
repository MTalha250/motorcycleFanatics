import img from "@/assets/hero-background.png";
import { Link } from "react-router-dom";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import useAuthStore from "@/store/authStore";
import { logout } from "@/hooks/auth";
import toast from "react-hot-toast";
import '../../../i18n'
import { useTranslation } from "react-i18next";
import Language from "@/components/Language";

const Hero = () => {
  const { t } = useTranslation();
  const { user, setUser, setToken } = useAuthStore();
  return (
    <div className="w-full h-[90vh] relative">
      
      <img src={img} alt="banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#F60400]/50"></div>
      <motion.div
        initial={{ opacity: 0, y: 75, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center text-white px-8 md:px-16 mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-4xl exo uppercase italic">
            {t('heroH1')}
          </h1>
          <p className="text-center mt-5 max-w-2xl text-base md:text-lg lg:text-xl">
            Check the availability of your region and secure your spot in just a
            few clicks. Start by entering the first two digits of your postcode.
          </p>
          <Language/>
          {user ? (
            <>
              <div className="mt-10 btn-primary-hover bg-primary py-3 px-8 lg:py-4 lg:px-10 text-white rounded-[8px] text-xl font-semibold">
                Hi, {user?.first_name}
              </div>
              <button
                onClick={() => {
                  logout();
                  setUser(null);
                  setToken(null);
                  toast.success("Logged out successfully");
                }}
                className="mt-5 hover:underline text-base md:text-lg lg:text-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="mt-10 btn-primary-hover bg-primary py-3 px-8 lg:py-4 lg:px-10 text-white rounded-[8px] text-xl font-semibold"
              >
                Log In
              </Link>
              <p className="my-2 text-base md:text-lg lg:text-xl">Or</p>
              <Link
                to="/signup"
                className="hover:underline text-base md:text-lg lg:text-xl"
              >
                Register
              </Link>{" "}
            </>
          )}
        </div>
        <div className="mt-5">
          <BsMouse className="animate-bounce text-white text-2xl md:text-3xl lg:text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
