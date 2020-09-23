import React from "react";
import "./NowPlaying.css";
import { connect } from "react-redux";

const NowPlaying = (props) => {
  const { currentTrack } = props;

  return (
    <div className="w-100 text-center audio-area d-flex" style={{position : 'relative'}} >
      <h1 className="current-track-name">{currentTrack.name}</h1>
      <audio src={currentTrack.audio} controls muted autoPlay loop></audio>
    </div>
  );
};
const mapStateToProps = state => ({
  currentTrack  : state.currentTrackArray.currentTrack,
  currFav : state.favouriteArray.favourites,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
