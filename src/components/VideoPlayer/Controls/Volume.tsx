"use client";

import { UseVolumeReturn } from "../player";
import styles from "./styles.module.css";

type Props = UseVolumeReturn;

const Volume = ({
  handleVolumeChange,
  volume,
  isMuted,
  showVolumeControl,
  toggleVolumeControl,
}: Props) => {
  return (
    <div className="relative">
      <button onClick={() => toggleVolumeControl()}>
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            fill="currentColor"
            className="lg:size-[35px] md:size-[30px] sm:size-[20px] xs:size-[20px] text-white mt-1">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:size-[35px] md:size-[30px] sm:size-[20px] xs:size-[20px] mt-1"
            viewBox="0 0 25 25"
            fill="none">
            <path
              d="M11.465 5.73438L6.63203 9.60078H2.76562L2.76562 15.4004H6.63203L11.465 19.2668V5.73438Z"
              stroke="white"
              strokeWidth="2.17485"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.2676 5.66406C21.0797 7.47671 22.0976 9.93485 22.0976 12.4979C22.0976 15.061 21.0797 17.5192 19.2676 19.3318M15.8555 9.07617C16.7615 9.98249 17.2705 11.2116 17.2705 12.4931C17.2705 13.7746 16.7615 15.0037 15.8555 15.91"
              stroke="white"
              strokeWidth="2.17485"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {showVolumeControl && (
        <div
          className={`absolute lg:bottom-20 md:bottom-16 sm:bottom-10 xs:bottom-10 -right-10 volume_container p-3 ${styles.input_range}`}>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => handleVolumeChange(Number(e.target.value))}
            className="lg:w-[100px] md:w-[80px] sm:w-[60px] xs:w-[60px]"
          />
        </div>
      )}
    </div>
  );
};

export default Volume;
