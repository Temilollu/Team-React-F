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

   const  { index,currentTrack,track, val, addRecent, alltracks, albumPath } = props;
  const wholeNo =  Math.floor(track.duration / 60)
  let remainder =  Math.floor(track.duration % 60)
  if(remainder < 10){  remainder = remainder * 10}
 
  return ( 
  //   <div className="col-4 d-flex my-2 align-items-center track" onClick={ handleChange}>
  //     <img src={image}  className="mr-2" style={{ height: 20, width: 20 }}  alt="" />
  //     <div className='d-flex justify-content-between' style={{width : '75%'}}>
  //     <h6 className="track-title">{title}</h6>
  //     <p>{track.album_name}</p>
  //     
  // </div>

  //   </div>
 
      <tr onClick={ handleChange} className="table-elements">
      <th scope="row">{index + 1}</th> 
       <td> <Like toggle={val} Click={handleClick}/> {track.name}     </td>
        <td className={albumPath ? 'remove' : ''}> { track.artist_name}</td>
        <td className={albumPath ? 'remove' : 'last'}> { track.album_name }</td>
        <td  className={albumPath ? '' : 'last'}>{`0${wholeNo}:${remainder}`}</td>
    </tr>
 
 

  );
 }


const mapDispatchToProps = dispatch => ({
  currentTrack : track => dispatch(getCurrentTrack(track)),
  favourites : fav => dispatch(addFavouriteAction(fav)),
  addRecent : track => dispatch(AddToRecent(track))
})

export default connect(null,mapDispatchToProps)(Track);
