import React from "react";
import { TrackI } from "../player";
import styles from "./styles.module.css";

type Props = TrackI;

const Track = ({ currentTime, duration, handleSeek }: Props) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <div className={`flex items-center space-x-2 w-full ${styles.input_range}`}>
      <span className="text-white lg:text-[17px] md:text-[17px] sm:text-[15px] xs:text-[10px]">
        {formatTime(currentTime)}
      </span>
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={(e) => handleSeek(Number(e.target.value))}
        className="w-full lg:h-[7.5px] md:h-[6.5px] sm:h-[5.5px] xs:h-[4.5px] bg-transparent"
      />
      <span className="text-white lg:text-[17px] md:text-[17px] sm:text-[15px] xs:text-[10px]">
        {formatTime(duration)}
      </span>
    </div>
  );
};

export default Track;
