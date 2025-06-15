import { ControlsI } from "../player";
import FullScreenButton from "./FullScreenButton";
import MainPlayButton from "./MainPlayButton";
import NextBack from "./NextBack";
import PlayPause from "./PlayPause";
import Track from "./Track";
import Volume from "./Volume";

type Props = ControlsI;

const Controls = ({
  play_pause,
  fullScreen,
  track,
  volume,
  next_back,
}: Props) => {
  return (
    <div className="custom_class_video_controller video_h_w absolute left-0 bottom-0 ">
      {!play_pause?.isPlaying ? (
        <MainPlayButton onClick={play_pause?.onClick} />
      ) : (
        ""
      )}

      {play_pause?.isPlaying ? (
        <div className="custom_class_controls video_h_w relative lg:px-[40px] md:px-[30px] sm:px-[10px] xs:px-[10px] ">
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <NextBack play_pause={play_pause} next_back={next_back} />
          </div>
          <div className="absolute left-0 lg:bottom-8 md:bottom-6 sm:bottom-3 xs:bottom-2 w-full lg:px-[40px] md:px-[30px] sm:px-[10px] xs:px-[10px]">
            <div className="controls_container lg:rounded-[20px] md-rounded-[15px] sm:rounded-md xs:rounded-md lg:h-[81px] md:h-[71px] sm:h-[30px] xs:h-[30px]  lg:px-[40px] md:px-[35px] sm:px-[5px] xs:px-[5px] lg:py-[24px] md:py-[20px] sm:py-[10px] xs:py-[10px] flex  justify-between items-center gap-4">
              <PlayPause
                onClick={play_pause?.onClick}
                isPlaying={play_pause?.isPlaying}
                showMainPlay={play_pause?.showMainPlay}
              />
              <Track
                currentTime={track?.currentTime}
                duration={track?.duration}
                handleSeek={track?.handleSeek}
              />
              <Volume
                handleVolumeChange={volume.handleVolumeChange}
                isMuted={volume?.isMuted}
                showVolumeControl={volume?.showVolumeControl}
                toggleMute={volume?.toggleMute}
                toggleVolumeControl={volume?.toggleVolumeControl}
                volume={volume?.volume}
              />
              <FullScreenButton onClick={fullScreen} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Controls;
