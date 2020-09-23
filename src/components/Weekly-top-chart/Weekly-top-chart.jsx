import React, { Component } from "react";
import "./Weekly-top-chart.css";
import { connect } from 'react-redux';
import { selectAlbumItemstracks } from '../../Redux/track/track-selector';
import getCurrentTrack, { AddToRecent} from '../../Redux/track/track-action'

class WeeklyTopChart extends Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
    };
  }
  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { tracks, currentTrack, addRecent } = this.props;
    let weeklyTracks = [];
    if (tracks.length) {
      for (let i = 8; i < 14; i++) {
        weeklyTracks.push(tracks[i]);
      }
    }
    return (
      <div className="row p-4" id="weekly">
        <div className="col-12 px-3">
          <h5 className="main-heading">Weekly Top Tracks</h5>
        </div>

        {weeklyTracks.length
          ? weeklyTracks.map((track, idx) => {
              return (
                <div
                  className="track-card col-2 my-3 text-center"
                  key={idx}
                  onClick={ () => { currentTrack(track); addRecent(track) }}
                >
                  <img
                    src="https://www.pngitem.com/pimgs/m/480-4807647_apple-music-png-transparent-png.png"
                    alt="Track Card"
                    className="track-image"
                  />
                  <h5 className="track-name mt-2">{track.name}</h5>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tracks : state.getData.trackData,
})
const mapDispatchToProps = dispatch => ({
  currentTrack : track => dispatch(getCurrentTrack(track)),
  addRecent : track => dispatch(AddToRecent(track))
})


export default connect(mapStateToProps,mapDispatchToProps)(WeeklyTopChart);
