import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'

import Spinner from 'react-bootstrap/Spinner'
import LoadingOverlay from 'react-loading-overlay/lib/LoadingOverlay';
// Pages
import Homepage from "./pages/Homepage/Homepage";
import Album from "./pages/Album/Album";
import Tracks from "./pages/Tracks/Tracks";
import Artists from "./pages/Artists/Artists";
import Profile from "./pages/Profile/Profile";
import SigninSignup from "./pages/Signin-Signup/SigninSignup";
import SignUp from './pages/Signin-Signup//Signup'
import {isFetchingAsync, isFetchingTracks}  from './Redux/getData/album-action';
import Favourites from './pages/Favourites/Favourites'
import RecentlyPlayed from './pages/Recently Played/Recently-played'
// import Signup from "./pages/Signin-Signup/Signup";
// import Sidebar from "./components/Sidebar/Sidebar";
import NowPlaying from "./components/NowPlaying/NowPlaying";

// CSS
import "./App.css";
import AlbumTracks from "./pages/Album/Album-track-list-preview";

class App extends Component {

  async componentDidMount() {
    const { getAlbumData, tracko } = this.props
    getAlbumData()
    tracko()
  }

  
  

  render() {
   const { tracks, isFetching} = this.props

    return (
      <LoadingOverlay
        active={isFetching}
        spinner
        text='Loading your tracks...'
        >
      <Router>
        <div>
        

           {/* {this.props.isFetching && <Spinner animation="border" role="status" variant="danger">
             <span className="sr-only">Loading...</span>
           </Spinner>} */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Homepage {...props} /> )} 
                />
        
            <Route
              path="/tracks"
              render={(props) => (
                <Tracks  {...props} tracks={tracks}/>  )}
                 />
           
            <Route
              exact
              path="/albums"
              render={(props) => (<Album  {...props}  />)} 
              />

            <Route
              exact
              path="/recently-played"
              render={(props) => (<RecentlyPlayed   {...props}  />)} 
              />
              <Route
              exact
              path="/favourites"
              render={(props) => (<Favourites  {...props}  />)} 
              />
  
            {/* <Route
              path="/artists"
              render={(props) => (
                <Artists
                  {...props}
                  tracks={tracks}
                  artists={artists}
                  handlePath={this.handlePath}
                />
              )}
            /> */}
            <Route
              exact
              path="/albums/:albumid"
              render={(props) => (<AlbumTracks {...props}/> )}
                 />
            <Route path="/profile" component={Profile} />
            <Route path="/signin" component={SigninSignup} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>

        <div className="container-fluid px-0 " style={{marginBottom : '5rem'}}>
          <div className="row justify-content-center">
            <div className=" mx-auto" id="now-playing">
              <NowPlaying  />
            </div>
          </div>
        </div>
      </Router>
      </LoadingOverlay>
    );
  }
}

const mapStateToProps = state => ({
  isFetching : state.getData.isFetching,
  tracks : state.getData.trackData,
})

const mapDispatchToProps = dispatch => ({
  getAlbumData : album => dispatch(isFetchingAsync(album)),
  tracko : () => dispatch(isFetchingTracks())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
