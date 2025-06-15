"use client";

import usePlayHook from "@/components/VideoPlayer/hooks/usePlayHook";
import useVolume from "@/components/VideoPlayer/hooks/useVolume";
import Controls from "./Controls/Controls";
import useNextBack from "./hooks/useNextBack";
import "./css/player.css";
import { twMerge } from "tailwind-merge";
import { isVideoLink } from "./utils/IsVideoLink";
type Props = {
  videoLink: string;
  customClass?: string;
};

const VideoPlayer = ({ videoLink, customClass }: Props) => {
  const {
    currentTime,
    duration,
    handlePlayPause,
    handleSeek,
    isPlaying,
    toggleFullScreen,
    videoRef,
    showMainPlay,
  } = usePlayHook();

  const {
    handleVolumeChange,
    isMuted,
    showVolumeControl,
    toggleMute,
    toggleVolumeControl,
    volume,
  } = useVolume(1, videoRef);

  const { handleBack, handleNext } = useNextBack(videoRef);

  return (
    <>
      {isVideoLink(videoLink) ? (
        <div className={twMerge("video_h_w relative ", customClass)}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/K6--6aeQz48?si=1dECc3kznO6Uif3F"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={twMerge("video_h_w object-cover", customClass)}></iframe>
        </div>
      ) : (
        <div className={twMerge("video_h_w relative ", customClass)}>
          <video
            ref={videoRef}
            className={twMerge("video_h_w object-cover", customClass)}
            preload="none"
            controls={false}>
            <source src={videoLink} type="video/mp4" />
          </video>

          <Controls
            play_pause={{
              isPlaying: isPlaying,
              onClick: handlePlayPause,
              showMainPlay,
            }}
            fullScreen={toggleFullScreen}
            track={{
              currentTime,
              duration,
              handleSeek,
            }}
            volume={{
              handleVolumeChange,
              isMuted,
              showVolumeControl,
              toggleMute,
              toggleVolumeControl,
              volume,
            }}
            next_back={{
              handleBack,
              handleNext,
            }}
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
