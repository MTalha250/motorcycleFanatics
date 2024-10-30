import email from "../../assets/email.png";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EmailVerification = () => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (!isNaN(Number(element.value))) {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      if (element.nextSibling && element.value) {
        (element.nextSibling as HTMLInputElement).focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.includes("")) {
      toast.error("Please enter the OTP");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URI}/verify-email`,
        {
          email: user?.email,
          code: otp.join(""),
        }
      );
      setUser(response.data.user);

      toast.success(response.data.message || "Email verified successfully");
      otp.fill("");
      setTimeout(() => {
        if (response.data.user?.is_video_verified) {
          navigate("/");
        } else {
          navigate("/video-verification");
        }
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Invalid OTP");
      return;
    }

    console.log("Entered OTP:", otp.join(""));
  };

  return (
    <div className="bg-white font-poppins min-h-[100vh] flex flex-col justify-center items-center relative px-4 md:px-0">
      {/* Semi-Circle */}
      <motion.div
        initial={{ opacity: 0, y: -95, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="w-[100%] md:w-[60%] lg:w-[50%] h-[50%] bg-[#f6040061] absolute rounded-b-full lg:-top-28 -top-48"
      >
        <img
          src={email}
          alt="email"
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[60px] md:w-[70px]"
        />
      </motion.div>

      {/* Content */}
      <div className="mt-0 md:mt-20 flex flex-col items-center">
        <p className="text-primary text-xl md:text-2xl lg:text-3xl leading-tight font-bold text-center">
          {t("verifyEmail")}
        </p>

        <motion.form
          initial={{ opacity: 0, x: 75, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          action=""
          className="flex flex-col justify-start items-center mt-8 text-primary"
          onSubmit={handleSubmit}
        >
          {/* OTP Input Fields */}
          <div className="flex space-x-2 md:space-x-3 mb-6">
            {otp.map((data, index) => (
              <input
                key={index}
                className="w-[40px] h-[50px] md:w-[50px] md:h-[60px] border-2 border-gray-300 focus:outline-primary  rounded-md text-center text-lg md:text-xl font-bold"
                type="text"
                name="otp"
                maxLength={1}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          <button className="btn-primary-hover bg-primary px-6 py-2 md:px-4 md:py-3 rounded-[8px] text-white font-semibold text-sm md:text-base">
            {t("verifyBtn")}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default EmailVerification;
