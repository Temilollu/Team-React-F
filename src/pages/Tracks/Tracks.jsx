import React, { Component } from "react";
import Track from "../../components/Track/Track";

import Sidebar from '../../components/Sidebar/Sidebar'
import './Track.css'

class Tracks extends Component {
  constructor(props) {
     super(props);
     console.log(props)
     this.state = {}
   }

  render() {
    this.path = this.props.match.path;
    const { tracks, handleClick } = this.props;

    return (
      <section className="container-fluid row section-container" style={{paddingLeft : 0}}>
        <div  className="col-2">
              <Sidebar activePath="tracks" /> 
        </div>
     
        <div className="col-10 track-item" style={{marginTop : this.path === '/tracks' ? '0' :'32rem' }} >
        <div className="jumbotron-fluid px-5">
          
          <h1>TRACKS ({ tracks.length}) </h1>
        </div>
        <div className="row  justify-content-center px-5" style={{width : '100%' }} >
          {tracks.map((track) => {
            return (
              <Track
                key={track.id}
                id={track.id}
                artist_id={track.artist_id}
                artist_name={track.artist_name}
                title={track.name}
                image={track.image}
                date={track.releasedate}
                handleClick={handleClick}
              />
            );
          })}
        </div>
        </div>

      </section>
    );
  }
}

export default Tracks;
