import React from 'react';

import Tracks from '../Tracks/Tracks'
import { connect } from 'react-redux';
import './Favourites.css'
const Favourites = (props) => {
    const  { favourites } = props
    console.log(favourites);
    return ( 
        <div className="fav-container">
           <h1 className="fav-header" >Tadaa!! Here are your Favourites</h1>
            <Tracks tracks={favourites}  {...props} />  
            
         {
             !favourites.length ? <h1 className="text-center no-fav">You have No Favourites</h1> : ''
         }
         
        </div>
     );
}

const mapStateToProps = state => ({
    favourites : state.favouriteArray.favourites,
  })
 
export default connect(mapStateToProps)(Favourites);