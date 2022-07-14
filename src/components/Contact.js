import React from 'react';
import './whyus.css';
// import pic from './coding2.jpg';
import contact from '../static/contact.jpg';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiWhatsapp } from 'react-icons/si';
import './contact.css';
import NavBar from './NavBar';
import Footer from './Footer';
const Contact = () => {
  return (
    <>
      <NavBar />
      <h1 className="head about-text">CONTACT-US</h1>
      <div className="row">
        <div className="col-sm-6">
          <img className="d-block w-100" src={contact} alt="Third slide" />
        </div>

        <div className="col-sm-6 row  contact-container">
          <h4 className="text-center">
            Would you like to get in touch?
            <br />
            Please write to us at <strong>test@test.com</strong>
            <br /> We will get back to you as soon as possible.
            <br />
            <br />
            --Connect On Social Media--
          </h4>
          <div className="icons-container text-center">
            <h2 className="icons text-center">
              <BsFacebook color="blue" />
            </h2>
            <h2 className="icons text-center">
              <BsLinkedin color="darkblue" />
            </h2>

            <h2 className="icons text-center">
              <AiFillTwitterCircle color="darkcyan" />
            </h2>

            <h2 className="icons text-center">
              <a
                class="whatsapplink"
                href="https://api.whatsapp.com/send?phone=+919999839864"
                target="blank"
              >
                <SiWhatsapp color="green" />
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
