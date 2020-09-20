import React from "react";
import { connect } from 'react-redux';
import getCurrentTrack, { AddToRecent} from '../../Redux/track/track-action'
import { addFavouriteAction }  from '../../Redux/favourites/favourites-action'
import Like from '../Like/like'
import "./Track.css";



const  Track  = (props) => {

  const handleClick = (e) => {  
  const  { favourites, track} = props
  if(alltracks){
    let Filteredtrack =  alltracks.filter(tracks => tracks.id === track.id ? track : '' ) 
     favourites(Filteredtrack[0])
  }
  else{
     favourites(track)
  }
  
  }
 
 const handleChange = (props) => {
     currentTrack(track); 
     if(alltracks){
       let Filteredtrack =  alltracks.filter(tracks => tracks.id === track.id ? track : '' ) 
       addRecent(Filteredtrack[0])
     }
     else{
       addRecent(track)
     }

  }

   const  { image, title,currentTrack,track, val, addRecent, alltracks } = props;
   
  return ( 
    <div className="col-4 d-flex my-2 align-items-center track" onClick={ handleChange}>
      <img src={image}  className="mr-2" style={{ height: 20, width: 20 }}  alt="" />
      <div className='d-flex justify-content-between' style={{width : '75%'}}>
      <h6 className="track-title">{title}</h6>
      <Like toggle={val} Click={handleClick}  />
  </div>

    </div>
  );
 }


const mapDispatchToProps = dispatch => ({
  currentTrack : track => dispatch(getCurrentTrack(track)),
  favourites : fav => dispatch(addFavouriteAction(fav)),
  addRecent : track => dispatch(AddToRecent(track))
})

export default connect(null,mapDispatchToProps)(Track);
