import { useState, useEffect, RefObject } from "react";
import { UseTrackHookReturn } from "../player";

export default function useTrackHook(
  videoRef: RefObject<HTMLVideoElement | null>
): UseTrackHookReturn {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handleSeek = (newTime: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const updateTime = () => {
      if (videoElement) {
        setCurrentTime(videoElement.currentTime);
        setDuration(videoElement.duration || 0);
      }
    };

    if (videoElement) {
      videoElement.addEventListener("timeupdate", updateTime);
      videoElement.addEventListener("loadedmetadata", updateTime);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", updateTime);
        videoElement.removeEventListener("loadedmetadata", updateTime);
      }
    };
  }, [videoRef]);

  return { currentTime, duration, handleSeek };
}
