import React, { useEffect, useRef, useState } from "react";
import videoSrc from "@/assets/video.mp4";
import toast from "react-hot-toast";

const VideoVerification: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoWatched, setIsVideoWatched] = useState(false);
  const [lastTime, setLastTime] = useState(0);

  // Warn user when they try to leave the page before watching the full video
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isVideoWatched) {
        event.preventDefault();
        event.returnValue = "";
        toast.error("You must watch the full video to get verified.");
      }
    };

    const handlePopState = () => {
      if (!isVideoWatched) {
        toast.error("You must watch the full video to get verified.");
        // Optionally prevent navigation if you want strict control
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

  // Handle when video ends
  const handleVideoEnded = () => {
    setIsVideoWatched(true);
    toast.success("You've completed the video. You're verified!");
  };

  // Prevent seeking in the video
  const handleTimeUpdate = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (
        videoElement.currentTime > lastTime + 1 ||
        videoElement.currentTime < lastTime
      ) {
        videoElement.currentTime = lastTime; // Reset to the last allowed time
      } else {
        setLastTime(videoElement.currentTime); // Update last allowed time
      }
    }
  };

  // Play video automatically on mount
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center container">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Video Verification
        </h1>
        <video
          ref={videoRef}
          className="w-full h-auto mb-4 rounded-lg border border-primary"
          onEnded={handleVideoEnded}
          onTimeUpdate={handleTimeUpdate}
          controls={false}
          autoPlay
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
