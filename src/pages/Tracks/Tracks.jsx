import React, { Component } from "react";
import Track from "../../components/Track/Track";
import Sidebar from '../../components/Sidebar/Sidebar'
import { connect } from 'react-redux';
import './Track.css'

class Tracks extends Component {
 
  render() {
    this.path = this.props.match.path;
    const { tracks , currFav, Alltracks} = this.props;
  
    let path = this.path.replace('/', '')
    let albumPath = this.path.includes('album') ? true : false
    return (
      <section className="container-fluid row section-container" style={{paddingLeft : 0, paddingRight: '0', margin : 0}}>
        <div  className="col-2" style={{paddingLeft : 0, paddingRight: '0'}}>
              <Sidebar activePath={path} /> 
        </div>
     
        <div className="col-10 track-item" style={{marginTop : !this.path.includes('album')  ? '0' :'32rem' }} >
        <div className="jumbotron-fluid px-5">
          
          { tracks.length ? <h1>TRACKS ({ tracks.length}) </h1> : '' }
        </div>
        <div className="row  justify-content-center" style={{width : '100%', paddingRight: 0, margin : 0 }} >
          {
          tracks.map((track) => {
          const isFav = currFav.some(val => val.id === track.id)
         
            return (
              <Track
                key={track.id}
                title={track.name}
                image={track.image}
                track={track}
                val ={isFav}
                alltracks ={ albumPath ? Alltracks : null  }
              />
            );
          })
        }
        </div>
        </div>

      </section>
    );
  }
}
const mapStateToProps = state => ({
  currFav : state.favouriteArray.favourites,
  Alltracks : state.getData.trackData,
})

export default connect(mapStateToProps)(Tracks);