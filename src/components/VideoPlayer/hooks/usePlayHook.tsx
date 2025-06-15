import { useRef, useState } from "react";
import useTrackHook from "./useTrackHook";
import { UsePlayHookReturn } from "../player";

export default function usePlayHook(): UsePlayHookReturn {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showMainPlay, setShowMainPaly] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { currentTime, duration, handleSeek } = useTrackHook(videoRef);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowMainPaly(false);
      } else {
        videoRef.current.play();
        setShowMainPaly(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch((err) => {
          console.error(`Failed to enter fullscreen mode: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return {
    videoRef,
    isPlaying,
    currentTime,
    duration,
    handlePlayPause,
    handleSeek,
    toggleFullScreen,
    showMainPlay,
  };
}
