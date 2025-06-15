import { RefObject } from "react";
import { useNextBackReturn } from "../player";

const useNextBack = (
  videoRef: RefObject<HTMLVideoElement | null>
): useNextBackReturn => {
  const handleBack = (): void => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0,
        videoRef.current.currentTime - 5
      );
    }
  };

  const handleNext = (): void => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.duration,
        videoRef.current.currentTime + 5
      );
    }
  };

  return {
    handleBack,
    handleNext,
  };
};

export default useNextBack;
