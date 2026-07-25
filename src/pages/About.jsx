import "./About.css";
import aboutHero from "../assets/pageImages/aboutHero.png";
import historyImage from "../assets/pageImages/historyImage.png";
import aboutImage from "../assets/pageImages/aboutImage.png";
import feature1 from "../assets/icons/feature1.png"
import feature2 from "../assets/icons/feature2.png"
import feature3 from "../assets/icons/feature3.png"
import feature4 from "../assets/icons/feature4.png"
import feature5 from "../assets/icons/feature5.png"
import feature6 from "../assets/icons/feature6.png"
import feature7 from "../assets/icons/feature7.png"
import feature8 from "../assets/icons/feature8.png"

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function About() {

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
      <main className="about">
        <div className="aboutHero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${aboutHero})`}}>
          <h1>#AboutAphrodite</h1>
        </div>
        
        <div className="historyBody">
          
          <div id="historyAphrodite" className="historyText">
            <h2 className="historyTitle">History of Aphrodite</h2>
            <p>Estimates of when humans began wearing clothes range from 40,000 to as many as 3 million years ago. The development of clothing is deeply connected to human evolution, with early garments likely consisting of animal skins and natural fibres adapted from protection and social signaling.</p>
            <p>According to anthropologists and archaeologists, the earliest clothing likely consisted of fur, leather, leaves, or grass that draped, wrapped, or tied around the body. Knowledge of such clothing remains inferential, as clothing materials deteriorate quickly compared with stone, bone, shell, and artifacts.</p>
          </div>
          <div className="historyImage">
            <img src={historyImage} alt="" />
          </div>
        </div>

        <div id="aboutAphrodite"  className="aboutAphrodite">
          <img src={aboutImage} alt="" />
          <div className="aboutAphroditeText">
            <h2>About Aphrodite</h2>
            <p>Aphrodite was founded in 2010 by Mr. Emmanuel Chika. Since then, Aphrodite's priority has always been her customers. trying her possible best to make her customers happy and satisfy.</p>
            <p>Just like the history of clothing, Aphrodite also sells clothes that are not made with animal products specially for our vegeterian customers.</p>
            <br />
            <p>Here in Aphrodite, we treat our customers like kings and queens.</p>
          </div>
        </div>




        <h2 className="featuresContainerTitle">Why buy from Us?</h2>
        <div className="featuresContainer">
          
          <section class="features">
            <img src={feature1} alt="Feature 1" />
            <h3>Easy online order</h3>
          </section>
          <section class="features">
            <img src={feature2} alt="Feature 2" />
            <h3>24/7 support and service</h3>
          </section>
          <section class="features">
            <img src={feature3} alt="Feature 3" />
            <h3>Fast and free shipping</h3>
          </section>
          <section class="features">
            <img src={feature4} alt="Feature 4" />
            <h3>Cheap and affordable goods</h3>
          </section>
          <section class="features">
            <img src={feature5} alt="Feature 5" />
            <h3>High quality products</h3>
          </section>
          <section class="features">
            <img src={feature6} alt="Feature 6" />
            <h3>Satisfy and happy customers</h3>
          </section>
          <section class="features">
            <img src={feature7} alt="Feature 7" />
            <h3>Trust and reliable</h3>
          </section>
          <section class="features">
            <img src={feature8} alt="Feature 8" />
            <h3>Safe and secure purchase</h3>
          </section>
        </div>
      </main>
    </>
  )
}
export default About