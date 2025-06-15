import { useState, RefObject } from "react";
import { UseVolumeReturn } from "../player";

const useVolume = (
  initialVolume: number = 1,
  videoRef: RefObject<HTMLVideoElement | null>
): UseVolumeReturn => {
  const [volume, setVolume] = useState<number>(initialVolume);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showVolumeControl, setShowVolumeControl] = useState<boolean>(false);

  const toggleVolumeControl = (): void => {
    setShowVolumeControl((prevState) => !prevState);
  };

  const handleVolumeChange = (newVolume: number): void => {
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    if (newVolume > 0) {
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
  };

  const toggleMute = (): void => {
    if (isMuted) {
      setIsMuted(false);
      handleVolumeChange(volume > 0 ? volume : 1);
    } else {
      setIsMuted(true);
      handleVolumeChange(0);
    }
  };

  return {
    volume,
    isMuted,
    showVolumeControl,
    toggleVolumeControl,
    handleVolumeChange,
    toggleMute,
  };
};

export default useVolume;
