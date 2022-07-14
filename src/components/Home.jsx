import React from 'react';
import Carousels from "./Carousels";
import NavBar from './NavBar';
import PhotoGallery from './PhotoGallery';
import LeftPannel from './LeftPannel';

const Home = () => {
    return (
        <>
            <div>
                <NavBar />
                <div className="row">
                    <div className="col-md-6 col-12">
                        <LeftPannel />
                    </div>
                    <div className="col-md-6 col-12">
                    <Carousels />
                    </div>
                </div>
                
                <PhotoGallery />
            </div>
        </>

    )
}

export default Home;
