import React, { useEffect, useRef, useState } from "react";
import videoSrc from "@/assets/video.mp4";
import toast from "react-hot-toast";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const VideoVerification: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoWatched, setIsVideoWatched] = useState(false);
  const [lastTime, setLastTime] = useState(0);
  const { user, token, setUser } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isVideoWatched) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    const handlePopState = () => {
      if (!isVideoWatched) {
        toast.error("You must watch the full video to get verified.");
        window.history.pushState(null, "", window.location.href);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);
    window.history.pushState(null, "", window.location.href);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isVideoWatched]);

  const handleVideoEnded = async () => {
    setIsVideoWatched(true);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URI}/update-premium-user/${user?.id}`,
        {
          is_video_verified: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data.user);
      toast.success("You've completed the video. You're verified!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleTimeUpdate = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (
        videoElement.currentTime > lastTime + 1 ||
        videoElement.currentTime < lastTime
      ) {
        videoElement.currentTime = lastTime;
      } else {
        setLastTime(videoElement.currentTime);
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Autoplay failed:", error);
        toast.error("Please click to start the video.");
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center container">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Video Verification
        </h1>
        <video
          ref={videoRef}
          className="w-full h-auto mb-4 rounded-lg border border-primary"
          onEnded={handleVideoEnded}
          onTimeUpdate={handleTimeUpdate}
          controls={false}
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-lg text-gray-400">
          Watch the full video to get verified and access the platform.
        </p>
      </div>
    </div>
  );
};

export default VideoVerification;
