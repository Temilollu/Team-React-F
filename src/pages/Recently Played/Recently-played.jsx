import React from 'react';
import { connect } from 'react-redux';
import {  selectRecentTracks } from '../../Redux/track/track-selector'
  import Tracks from '../Tracks/Tracks'
import './Recently-played.css'
const RecentlyPlayed = (props) => {
 const  {recent} = props
        return ( 
        <div className="fav-container">
          <h1 className="fav-header">Here are your 10 last played songs  </h1>
           <Tracks tracks={recent}  {...props} />  
           {
             !recent.length ? <h1 className="text-center">You have No Recents..yet</h1> : ''
         }
        </div>
     );
}

const mapStateToProps = state => ({
    recent : selectRecentTracks(state)
})
 
export default connect(mapStateToProps)(RecentlyPlayed);
