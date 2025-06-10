"use client";

import React from "react";
import ReactPlayer from "react-player/youtube";

interface VideoPlayerProps {
  url: string;
  width?: string | number;
  height?: string | number;
  controls?: boolean;
  playing?: boolean;
  muted?: boolean;
  light?: boolean | string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  width = "100%",
  height = "100%",
  controls = true,
  playing = false,
  muted = false,
  light = false,
  className = "",
}) => {
  return (
    <div className={className}>
      <ReactPlayer
        url={url}
        width={width}
        height={height}
        controls={controls}
        playing={playing}
        muted={muted}
        light={light}
        playsinline
      />
    </div>
  );
};

export default VideoPlayer;