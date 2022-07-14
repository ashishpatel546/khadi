import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
import colored_khadi from "../static/colored khadi.jpg";
import dari from "../static/dari.png";
import khadi_ladies from "../static/khadi_ladies.png";
import ladies from "../static/ladies.png";
import ladies_party from "../static/ladies_party.jpg";
import ladies_suit from "../static/ladies_suit.jpg";
import modern from "../static/modern.png";
import party_ladies from "../static/party_ladies.jpg";
import bedsheet from "../static/bedsheet.png";
import khaditowel from "../static/khadi towel.png";
import khadibedsheet from '../static/khadi bedsheet.png'
import pic1 from '../static/Picture1.jpg';
import pic2 from '../static/Picture2.jpg';
import pic3 from '../static/Picture3.png';
import pic4 from '../static/Picture4.png';
import pic5 from '../static/Picture5.png';
import pic6 from '../static/Picture6.png';

const Products = () => {
    return (
        <div className="set-footer">
            <div className="remove-margin">
            <NavBar />
            <h1 className="text-center mt-3 mb-3 about-text">Products</h1>
            <h2 className="text-center mb-3 mt-3 sub-head">Existing Products</h2>
            <div className="ex-cards-container container">
              
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img" variant="top" src={colored_khadi} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img" variant="top" src={dari}  height="180px" width="180px"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={khaditowel} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img" variant="top" src={bedsheet} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={khadibedsheet} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
           </div>

           <h2 className="text-center mb-5 mt-5 subhead">Proposed Products</h2>

           <div className="pr-cards-container container"> 
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={ladies} height="180px" width="" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={ladies_party} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={ladies_suit} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={modern} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={party_ladies} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={khadi_ladies} height="180px" width="180px"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </div>

            <h3 className="text-center mb-5 mt-5 sub-head">Products With the use of recycled and upcycled materials
</h3>

           <div className="re-cards-container container"> 
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={pic1}height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={pic2} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={pic3} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={pic4} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={pic5} height="180px" width="180px" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img className="card-img"variant="top" src={pic6} height="180px" width="180px"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Products;