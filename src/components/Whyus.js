import React from "react";
import './whyus.css' 
import NavBar from './NavBar'

import whyus from '../static/whyus.jpeg'
const Whyus = () => {
  return (
    <div className="set-footer">
    <NavBar/>
    <div id="why"></div>
    <h1 className="head whyus-text">WHY-US</h1>
    <div className="about-container container">

      <div className="row">
 

        <div className="col-sm-12">
          <p className="para">
            <b>WHY US -  </b><br/><br/>
            <p> hereinafter referred to as IAMKHADI, is a trusted Non-for-profit
            social enterprise and export start-up. IAMKHADI incubated at the
            Indian Institute of Foreign Trade, and is working towards marketing
            and promotion of “hand woven-hand spun fabric” & Handlooms
            (disorganized sector) & Village Industry products in global markets
            for uplifting the living standards of the rural artisans and Women
            SHGs/ Co-operatives/ Start-ups/ NGOs/ Village Industry entrepreneurs
            by helping to provide direct global market access to them spread
            across the country.</p>
            <p>
            <br/> In addition to it, brought all the stakeholders
            from Farm to Foreign (5 F Formula of Hon’ble Prime Minister) on one
            platform towards achieving the objective of taking Handloom, Khadi &
            Village Industry products from Local to Global. <br/><br/>The definite need of
            the hour to leverage this emerging opportunity is to ensure
            scalability, quality, standardization, new design intervention,
            products, and innovation in Handloom, Khadi & Village Industry
            products on one side and relevant market linkages both within
            national boundaries as well at global platforms.
            <img
            className="d-block image img-fluid mt-5"
            src={whyus}
            alt="whyus"
            height="100px"
          />
            </p>
            </p>
           
        </div>
    
      </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Whyus;
