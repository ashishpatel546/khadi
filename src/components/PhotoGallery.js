import React from "react";


import "./whyus.css";
// import pic from './coding2.jpg';
import colored_khadi from "../static/colored khadi.jpg";
import dari from "../static/dari.png";
import khadi_ladies from "../static/khadi_ladies.png";
import ladies from "../static/ladies.png";
import ladies_party from "../static/ladies_party.jpg";
import ladies_suit from "../static/ladies_suit.jpg";
import modern from "../static/modern.png";
import party_ladies from "../static/party_ladies.jpg";
import { Card, CardGroup } from "react-bootstrap";
import pic2 from '../static/Picture2.jpg';
import pic3 from '../static/Picture3.png';

const PhotoGallery = () => {

  const images = [
    {
      original: {modern},
      thumbnail: {modern},
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
  ]
  return (
    <>
      <div className="gallery-container container-fluid">
      <h1 className="head gallery-text">Photo Gallery</h1>
      <div className="gallery ">
        <img className=" gallery-img"src={modern} />
        <img className=" gallery-img"src={khadi_ladies} />
        <img className=" gallery-img"src={ladies_suit} />
        <img className=" gallery-img"src={dari} />
        <img className=" gallery-img"src={colored_khadi} />
        <img className=" gallery-img"src={ladies_party} />
        <img className=" gallery-img"src={pic2} />
        <img className=" gallery-img"src={pic3} />
      </div>
      
              
      </div>
    </>
  );
};

export default PhotoGallery;
