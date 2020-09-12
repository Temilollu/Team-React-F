import React from "react";
import "./NowPlaying.css";
const NowPlaying = (props) => {
  const { currentTrack } = props;
  console.log(currentTrack)
  return (
    <div className="w-100 text-center audio-area d-flex" style={{position : 'relative'}} >
      <h1 className="current-track-name">{currentTrack.name}</h1>
      <audio src={currentTrack.audio} controls muted  loop></audio>
    </div>
  );
};

export default NowPlaying;
