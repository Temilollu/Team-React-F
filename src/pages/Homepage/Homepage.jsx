import React, { Component } from "react";

// Componets
// import Sidebar from "../../components/Sidebar/Sidebar";
import Featured from "../../components/Featured/Featured";
// import NowPlaying from "../../components/NowPlaying/NowPlaying";
import WeeklyTopChart from "../../components/Weekly-top-chart/Weekly-top-chart";
import TopArtists from "../../components/TopArtists/TopArtists";
import TopAlbums from "../../components/TopAlbums/TopAlbums";
import TopCharts from "../../components/TopCharts/TopCharts";
import Sidebar from "../../components/Sidebar/Sidebar";
// CSS
import "./Homepage.css";

class HomePage extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    let path = this.props.match.path;
    this.props.handlePath(path);
  }
  render() {
    return (
      <React.Fragment>
        <div className="row mx-0">
        <div className="col-2 "   style={{background: "white", padding : 0 }}>
            <Sidebar activePath="/" /> 
          </div>
          <div
           className="col-10 mobile__body"
            style={{ position: "absolute", right: 0, padding : 0 }}
          >
            <div className="col-12 d-flex show">
              <Featured
                tracks={this.props.tracks}
                currentTrack={this.props.currentTrack}
              />
            </div>

            <div className="col-12 d-flex" style={{paddingRight : 0}} >
              <WeeklyTopChart
                tracks={this.props.tracks}
                handleClick={this.props.handleClick}
              />
            </div>
            <div className="charts_tracks d-flex">
              <div className="col-6">
                <TopCharts
                  tracks={this.props.tracks}
                  handleClick={this.props.handleClick}
                />
              </div>
              <div className="col-6">
                <TopArtists artists={this.props.artists} />

                <TopAlbums
                  albums={this.props.albums}
                  handleClick={this.props.handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
