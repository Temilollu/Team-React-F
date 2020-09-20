import React from 'react';
import { connect } from 'react-redux';
import {  selectRecentTracks } from '../../Redux/track/track-selector'
import './Recently-played.css'
const RecentlyPlayed = ({recent}) => {
    console.log(recent);
    return ( 
      <div className="recently-played">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Track</th>
      <th scope="col">Artist</th>
      <th scope="col" className='last'>Album</th>
      <th scope="col" className='last'>Length</th>
    </tr>
  </thead>
  <tbody>
    { recent.map( rec => ( 
      <tr>
      <th scope="row">{recent.indexOf(rec) + 1}</th>
    <td>{rec.name}</td>
    <td> { rec.artist_name}</td>
    <td className='last'> { rec.album_name }</td>
      <td  className='last'>{rec.duration/60}</td>
    </tr>
    ) )}
 
   
  </tbody>
</table>
      </div>
     );
}

const mapStateToProps = state => ({
    recent : selectRecentTracks(state)
})
 
export default connect(mapStateToProps)(RecentlyPlayed);

//  <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td className='last'>@fat</td>
//       <td  className='last'>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td className='last'>@twitter</td>
//       <td  className='last'>@mdo</td>
//     </tr>