import React, { Component } from "react";
import Track from "../../components/Track/Track";
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchBar from '../../components/Search/Search'
import { connect } from 'react-redux';
import './Track.css'

class Tracks extends Component {
 state = {
   value : ''
 }
 handleChange = (e) => {
   this.setState({value : e.target.value })
}
  render() {
    this.path = this.props.match.path;
    const { tracks , currFav, Alltracks} = this.props;
     console.log(this.state.value);
    let path = this.path.replace('/', '')
    let albumPath = this.path.includes('album') ? true : false

    const trackFiltered = tracks.filter((track) =>
    track.name.toLowerCase().includes(this.state.value.toLowerCase())
  );
    return (
      <section className="container-fluid row section-container" style={{paddingLeft : 0, paddingRight: '0', margin : 0}}>
        <div  className="col-2" style={{paddingLeft : 0, paddingRight: '0'}}>
              <Sidebar activePath={path} /> 
        </div>
     
        <div className="col-10 track-item" style={{marginTop : !this.path.includes('album')  ? '7px' :'32rem' }} >
        <div className="jumbotron-fluid px-5 track-search d-flex">
          
          { tracks.length ? <h1>TRACKS ({ tracks.length}) </h1> : '' }
          {  this.path === '/tracks' && <SearchBar change={this.handleChange}/> }
        </div>
        <div className="row  justify-content-center" style={{width : '100%', paddingRight: 0, margin : 0, marginTop : '2rem' }} >
           <div className="recently-played" style={{width : '90%'}}>
             <table className="table">
       <thead>
      <tr>
      <th scope="col">#</th>
      <th scope="col">Track</th>
      <th scope="col" className={albumPath ? 'remove' : ''}>Artist</th>
      <th scope="col" className={albumPath ? 'remove' : 'last'}>Album</th>
      <th scope="col" className={albumPath ? '' : 'last'}>Length</th>
    </tr>
    </thead>
     <tbody>  
        {   
          trackFiltered.map((track) => {
          const isFav = currFav.some(val => val.id === track.id)
          const index = trackFiltered.indexOf(track)
            return (   
           <Track  key={track.id} albumPath={albumPath}  index={index} track={track}  val ={isFav}  alltracks ={ albumPath ? Alltracks : null  }
           />
        );
     
          })
        }   
        </tbody>
            </table>  
        </div> 
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