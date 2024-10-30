import arrowDown from "../../../assets/arrow-down.svg";
import Locator from "@/components/Locator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CircleX } from "lucide-react";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [areaNotAvailabe, setAreaNotAvailable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const { user, token } = useAuthStore();

  const AreaNotAvailable = () => {
    return (
      <div className="fixed w-full h-full top-0 left-0 bg-black/50 flex justify-center items-center z-50">
        <div className="p-10 bg-[#f60400f1] lg:max-w-[900px] min-h-[440px] rounded-xl flex flex-col justify-center items-center space-y-4 lg:space-y-6">
          <h2 className="heading-3 text-center">
            This Area is Currently <br />
            Unavailable
          </h2>
          <p className="text-center px-4">
            Unfortunately, this area has already been secured by someone else.
            But don't worry! You can subscribe to our updates to get notified
            when new areas become available.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="placeholder-white w-full min-w-[300px] md:max-w-[340px] px-4 bg-[#ffffff79] py-3 rounded-[8px] outline-none text-white font-semibold focus:outline-2 focus:outline-white"
          />

          <button className="btn-hover bg-white py-3 px-2 lg:w-[270px] text-primary rounded-[8px] text-lg font-bold">
            Subscribe to Updates
          </button>
          <CircleX
            size={30}
            strokeWidth={2}
            className="btn-hover hover:cursor-pointer"
            onClick={() => setAreaNotAvailable(false)}
          />
        </div>
      </div>
    );
  };

  const handleLocationSet = (location: { lat: number; lng: number }) => {
    setLocation(location);
  };

  const handleSearch = async () => {
    if (!user) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    if (!location) {
      toast.error("Please select a location first");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URI}/locations/check`,
        {
          latitude: location.lat,
          longitude: location.lng,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(`/our-plan/${location.lat}/${location.lng}`);
    } catch (error: any) {
      if (error.response.status === 409) setAreaNotAvailable(true);
      else toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-10">
      <div className="flex flex-col justify-center items-center space-y-16 relative">
        <h2 className="heading-2 text-primary capitalize">{t('howItWorksH2')}</h2>

        <div className="flex flex-col lg:gap-20 gap-24">
          <div className="relative ms:0 lg:-ms-16 bg-white max-w-[850px] lg:px-7 lg:py-4 py-3 px-5 rounded-full outline-4 outline-dotted outline-primary">
            <p className="para-medium text-primary !font-medium">
              {t('howItWorksP1')}
            </p>
            <img
              className="absolute top-10 left-0"
              src={arrowDown}
              alt="arrow"
            />
          </div>

          <div className="ms-10 lg:ms-0  relative bg-white max-w-[850px] lg:px-7 lg:py-4 py-3 px-5 rounded-full outline-4 outline-dotted outline-primary">
            <p className="para-medium text-primary !font-medium">
              {t('howItWorksP2')}
            </p>
            <img
              className="absolute top-10 left-2"
              src={arrowDown}
              alt="arrow"
            />
          </div>

          <div className="ms-28 lg:ms-20 -mt-5 md:mt-0 bg-white max-w-[850px] py-3 px-6 lg:px-7 lg:py-4  rounded-full outline-4 outline-dotted outline-primary">
            <p className="para-medium text-primary !font-medium">
             {t('howItWorksP3')}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-end md:items-start space-x-8 space-y-5 ">
          <h3 className="w-full md:w-1/2 heading-3 text-primary">
            {t('enterPostCodeDigitsPara')}
          </h3>
          <form action="#" className="md:w-1/2 w-full container">
            <Locator setLocation={handleLocationSet} />
          </form>
        </div>

        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-primary py-2 px-12 lg:py-4 lg:px-10 text-white rounded-2xl text-xl font-semibold btn-primary-hover"
        >
          {loading ? t("searching") : t("serachNow")}
        </button>
      </div>
      {areaNotAvailabe && <AreaNotAvailable />}
    </div>
  );
};

export default HowItWorks;
