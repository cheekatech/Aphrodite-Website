import React from "react";
import "./Contact.css";
import contactHero from "../assets/pageImages/contactHero.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import whatsApp from "../assets/icons/whatsapp.png";
import linkedIn from "../assets/icons/linkedin.png";

import phone from "../assets/icons/phone.png";
import address from "../assets/icons/address.png";
import email from "../assets/icons/email.png";

import mapAddress from "../assets/pageImages/mapAddress.webp";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Contact() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <>
      <main className="contact">
        <div className="contactHero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${contactHero})`}}>
          <h1>#ContactAphrodite</h1>
        </div>

        <div className="mapHero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${mapAddress})`}}>
        </div>
        
        <div className="contactBody">
          <form action="/contact" method="POST" className="contactForm" id="contactInfo">
            <legend>
              <h2>Send us a message</h2>
            </legend>
            <p>
              <label for="text">Name <span>*</span> </label>
              <input class="input" required type="text" id="text" placeholder="write your name" />
            </p>
            <p>
              <label for="email">Email <span>*</span></label>
              <input class="input" required type="email" id="email" placeholder="write your email" />
            </p>
            <p>
              <label for="number">Phone No </label>
              <input class="input" type="number" id="number" placeholder="write your phone number" />
            </p>
            <br />
            <br />
            <p class="submit-p"> <label htmlFor="">Write your message here <span>*</span></label></p>
            <textarea required placeholder="Write your message here..." rows="7" cols="30">
            </textarea>
            <p>
              <button type="Submit" class="btn">Submit</button>
            </p>
          </form>
          <div className="contactSide">
            <div className="contactAddress">
              <legend>
                <h2>Contact us through</h2>
                <hr />
              </legend>
              <address>
                <p><img src={phone} alt="" width={24} /> Phone: <a href="tel:+1234567890">+1-234567890</a></p>
                <p><img src={email} alt="" width={24} /> Email: <a href="mailto:aphrodite@gmail.com">aphrodite@gmail.com</a></p>
                <div><img src={address} alt="" width={24} /> Address: <a href="#map">No 20 Lagos Street,
                <p style={{paddingLeft: "6rem"}}>Lagos.</p>
                <p style={{paddingLeft: "6rem"}}>Nigeria.</p></a></div>
              </address>
            </div>
            <div className="mediaContainer">
              <legend>
                <h2>Social Medias</h2>
              </legend>
              <div className="medias">
              <a href="#" target="_blank">
                <img src={facebook} alt="Facebook Logo" width="50" />
              </a>
              <a href="#" target="_blank">
                <img src={instagram} alt="Instagram Logo" width="50" />
              </a>
              <a href="#"><img src={whatsApp} alt="whatsapp logo" width="50" /></a>
              <a href="#" target="_blank">
                <img src={linkedIn} alt="LinkedIn Logo" width="50" />
              </a>
            </div>
           </div>
          </div>
        </div>
        
      </main>

            
            
            
            
            
            
            
      
    </>
  )
}
export default Contact