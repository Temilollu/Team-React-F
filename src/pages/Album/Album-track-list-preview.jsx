import React from "react";
import { withRouter, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import AlbumTracksList from "./album.track.list";
import { selectAlbum} from '../../Redux/track/track-selector'
const AlbumTracks = (props) => {

  const albumId = props.match.params.albumid;
  
  const { album2 } = props; 
 
  return (
    <div style={{marginRight : 0}}>
      {/* <div className="col-10"> */}
        {album2.map((album) => {
        
          return album.id === albumId ? (
            <AlbumTracksList
              album={album}
        
              key={album.id}
            />
          ) : null;
        })}
      {/* </div> */}
    </div>
  );
};


const mapStateToProps = state => ({
  album2 : selectAlbum(state)
})

export default connect(mapStateToProps)(withRouter(AlbumTracks))
