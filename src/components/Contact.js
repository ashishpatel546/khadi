import React from 'react';
import './whyus.css';
// import pic from './coding2.jpg';
import contact from '../static/contact.jpg';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiWhatsapp } from 'react-icons/si';
import {IoLocationSharp} from 'react-icons/io5'
import './contact.css';
import NavBar from './NavBar';

const Contact = () => {
  return (
    <>
      <NavBar />
      <h1 className="head about-text">CONTACT-US</h1>
      <div className="row">
        <div className="col-sm-6">
          <img className="d-block w-100 contact-img" src={contact} alt="Third slide" />
        </div>

        <div className="col-sm-6 row  contact-container">
          <h5 className="text-center">
            Would you like to get in touch?
            <br />
            Please write to us at <strong>test@test.com</strong>
            <br /> We will get back to you as soon as possible.
            <br />
            <br />
            --Connect On Social Media--
          </h5>
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
          <h2><IoLocationSharp color="red"/></h2>
          <h5 className='text-center'><strong>Address:</strong>1144,Tower B2<br/>SPAZE Itech Park</h5>
        </div>
      </div>
    </>
  );
};

export default Contact;
