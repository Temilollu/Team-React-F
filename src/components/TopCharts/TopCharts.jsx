import React from "react";
import "./TopCharts.css";
import { connect } from 'react-redux';
import { selectAlbumItemstracks } from '../../Redux/track/track-selector';
import getCurrentTrack, { AddToRecent} from '../../Redux/track/track-action'
const TopCharts = ({ tracks, currentTrack, addRecent }) => {
 
  return (
    <React.Fragment>
      <div className="row" id="top-charts">
        <div className="col-12">
          <h1 className="main-heading mt-3 mb-3">Top Charts</h1>
        </div>
        <ul className="list-unstyled px-3 top-chart-ul">
          {tracks.map((track, idx) => {
            while (idx < 6) {
              return (
                <li onClick={() => { currentTrack(track); addRecent(track) }} key={track.id}>
                  <span className="numbering">{idx + 1}</span>
                  {track.name}
                </li>
              )
            }

            return null;
          })}
        </ul>
        
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  tracks : selectAlbumItemstracks(state)
})
const mapDispatchToProps = dispatch => ({
  currentTrack : track => dispatch(getCurrentTrack(track)),
  addRecent : track => dispatch(AddToRecent(track))
})

export default connect(mapStateToProps,mapDispatchToProps)(TopCharts);
