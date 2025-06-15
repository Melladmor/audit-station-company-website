export interface UsePlayHookReturn {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  handlePlayPause: () => void;
  handleSeek: (newTime: number) => void;
  toggleFullScreen: () => void;
  showMainPlay: boolean;
}

export interface UseTrackHookReturn {
  currentTime: number;
  duration: number;
  handleSeek: (newTime: number) => void;
}

export interface UseVolumeReturn {
  volume: number;
  isMuted: boolean;
  showVolumeControl: boolean;
  toggleVolumeControl: () => void;
  handleVolumeChange: (newVolume: number) => void;
  toggleMute: () => void;
}

export type useNextBackReturn = {
  handleBack: () => void;
  handleNext: () => void;
};

export interface PlayPauseI {
  onClick: () => void;
  isPlaying: boolean;
  showMainPlay?: boolean;
}
export interface TrackI {
  currentTime: number;
  duration: number;
  handleSeek: (newTime: number) => void;
}
export type VolumeI = UseVolumeReturn;
export interface NextBackI {
  play_pause: PlayPauseI;
  next_back: useNextBackReturn;
}
export interface ControlsI {
  play_pause: PlayPauseI;
  fullScreen: () => void;
  track: TrackI;
  volume: VolumeI;
  next_back: useNextBackReturn;
}

export interface MoadlI {
  show: boolean;
  handleShowModal?: () => void;
}
