import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import artist from "./artist.png";
import "./Artists.css";

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  async componentDidMount() {
    let path = this.props.match.path;
    this.props.handlePath(path);

    const artistsFetch = await fetch(
      "https://api.jamendo.com/v3.0/artists/?client_id=d5d26306&limit=all"
    );
    const artistsJson = await artistsFetch.json();
    const artists = artistsJson.results;
    this.setState({
      artists : artists.splice(0,9)
    });
  }
  render() {
    const { artists } = this.state;
    console.log( artists);
    return (
      <div className='row mx-0'>
        {/* <div className="col-2 px-0" >
          <Sidebar path={this.props.path} />
        </div> */}
        <div className="col-2"  id="sidebar" style={{ padding : 0 }}>
            <Sidebar activePath="artists" /> 
          </div>
        <div className="col-10 mobile__body px-0 mx-0">
          <div className="row justify-content-center">
            <Header
              header="ARTISTS"
              name="Travis Scott"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            repellat, quisquam ad sequi ab distinctio."
              image={artist}
            />
            {artists.map((artist) => {

              return (
                <div className="card col-3 m-3">
                  <img src={artist.image} alt="" className="w-25" />
                  <p>Name: {artist.name}</p>
                  <p>Id: {artist.id}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Artists;
