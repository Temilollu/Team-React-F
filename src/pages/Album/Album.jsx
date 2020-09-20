import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { selectAlbum} from '../../Redux/track/track-selector'

import Sidebar from "../../components/Sidebar/Sidebar";

import "./Album.css";

class Album extends Component {
  constructor() {
    super();
    this.state = {
      filtered: "",
     
    };
  }

  componentDidMount() {
    // let path = this.props.match.path;
    // this.props.handlePath(path);
  }
  handleChange = (e) => {
    this.setState({
      filtered: e.target.value,
    });
  };

 
  render() {
    const {  history, match, album2} = this.props;
    let album = album2.filter((a,id) => id < 25 )

    const albumFiltered = album.filter((album) =>
      album.name.toLowerCase().includes(this.state.filtered.toLowerCase())
    );
   
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 "   style={{background: "white", padding : 0 }}>
            <Sidebar activePath="albums" /> 
          </div>
          <div className="col-10 mobile__body">
            <div className="row">
              <div className=" jumbotron-fluid w-100">
                <div className="container">
                  <h1 className="main-h1">JAAMZ ALBUMS</h1>
                  <p className="lead">
                    This is the total list of albums on Jaamz Music Streaming
                    app. You can search by name.
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control w-100"
                    onChange={this.handleChange}
                    placeholder="Search by album name"
                  />

                  {!albumFiltered.length && (
                    <p className="empty">Oops! No album matches your search - '{this.state.filtered}'</p>
                  )}
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              {albumFiltered.map((album) => {
                
                return (
                  <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-10 m-2 p-2 text-center album-container" key={album.id}>
                    <div
                      className="album-item rounded-circle"
                      key={album.id}
                      onClick={() => history.push(`${match.url}/${album.id}`)}
                      style={{ background: `url(${album.image})` }}
                    ></div>
                    <h5>
                      <strong>
                        {album.name} - {album.tracks.length} Tracks
                      </strong>
                    </h5>
                    <p>by - {album.artist_name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  album2 : selectAlbum(state)
})

export default connect(mapStateToProps)(withRouter(Album));
