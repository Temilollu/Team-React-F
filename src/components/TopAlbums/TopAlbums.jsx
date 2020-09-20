import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { selectAlbum} from '../../Redux/track/track-selector'
import "./TopAlbums.css";
const TopAlbums = ({ album2 }) => {
  // id:
  // image:
  // joindate:
  // name:
  // shareurl:
  // shorturl:
  // website:
  return (
    <React.Fragment>
      <div className="row my-5" id="top-albums">
        <div className="col-12">
          <h1 className="main-heading my-4">Monthly Top Albums</h1>
          
        </div>
        {album2.map((album, idx) => {
          while (idx < 4) {
            return (
              <Link to={`/albums/${album.id}`} className="col-3" key={album.id}>
                <img
                  src={
                    album.image ||
                    "https://pickaface.net/gallery/avatar/dan5276bb68cda93.png"
                  }
                  className="album-image"
                  alt="album"
                />
              </Link>
            );
          }
          return null;
        })}
        <Link to="/albums" className="see-all-btn">
            View all Albums
          </Link>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  album2 : selectAlbum(state)
})

export default connect(mapStateToProps)(TopAlbums)