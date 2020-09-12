import React from 'react';

import { withRouter} from "react-router-dom";
import Tracks from '../Tracks/Tracks'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom'

const AlbumTracksList = (props) => {
  
    const { handleClick, currentTrack } = props
    const { tracks, artist_name, name, image } = props.album

    return ( 
     <div >
         {/* <Link to="/albums" style={{
           marginLeft : '16rem', 
           fontWeight : 900,
           borderRadius: '10px',
           ,
           padding: '.7rem 1rem',
           background: 'white',
           
           }}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
             <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
           Album</Link> */}
           <div className="header-container">
           <Header 
           header="ALBUM"
           name={name}
           image={image}
           artist_name={artist_name}
        />
        <div className="mobile-header">
           <h1>{name}</h1>
            <h2>By : {artist_name} </h2>
            <img src={image} alt=""/> 
        </div>
           </div>
           <div >
             
               <Tracks tracks={tracks}  handleClick={handleClick} currentTrack={currentTrack} {...props} /> 
           </div>
         
         {/* <h1>Album name : {name}</h1>
         <p className="display-4"> By : {artist_name}</p> */}
     
     </div>
     );
}
 
export default withRouter( AlbumTracksList);