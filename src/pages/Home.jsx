
import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.png';
import backgroundSlide1 from '../assets/pageImages/hero-backgroundSlide1.png';
import backgroundSlide2 from '../assets/pageImages/hero-backgroundSlide2.png';
import backgroundSlide3 from '../assets/pageImages/hero-backgroundSlide3.png';
import Products from "../components/Products.jsx";
import bigBanner1 from "../assets/pageImages/bigBanner1.jpg";
import bigBanner2 from "../assets/pageImages/bigBanner2.jpeg";
import smallBanner1 from "../assets/pageImages/smallBanner1.avif";
import smallBanner2 from "../assets/pageImages/smallBanner2.webp";
import smallBanner3 from "../assets/pageImages/smallBanner3.png";
import NewsLetter from "../components/NewsLetter.jsx";
import Footer from "../components/Footer.jsx";


import { TrendingNow, NewArrivals, FlashSales } from "../components/Products.jsx"


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: `url(${backgroundSlide1})`,
    id: 1,
    intro: "Welcome To",
    logo: logo,
    subLogo: "Brand",
    p: "...where dream becomes reality",

    },


    { image: `url(${backgroundSlide2})`,
    id: 2,
    logo: "",
    intro: "Visit our store at",
    subHead: "#StoreAphrodite",
    h6: "Deals on men and women fashion brands.",p: "Get up to 75% discount on price or coupon.",
    button: "Shop Now →",
    link: "/shop#shop",
    },


    { image: `url(${backgroundSlide3})`,
    id: 3,
    subHead: "#SportAphrodite",
    h6: "We now have both men and women sport wears.",
    p: "Get your quality favourite jersey and other sport wears.",
    button: "Sport Store →",
    link: "/shop#sportWears",
    }
  ];

  const bigBanners = [
    {
      id: 1,
      image: bigBanner1,
      h1: "#WOMEN",
      p: "Get your women's fashion brands.",
      button: "Shop Now",
      link: "/shop#womenFashion"
    },
    {
       id: 2,
      image: bigBanner2,
      h1: "#MEN",
      p: "Get your men's fashion brands.",
      button: "Shop Now",
      link: "/shop#menFashion"
    }
  ];


  const smallBanners = [
    {
      id: 1,
      image: `url(${smallBanner1})`,
      h1: "New Arrivals",
      p: "Get 50% discount on new products.",
      button: "Buy Now",
      link: "/shop#newArrivals",
    },
    {
      id: 2,
      image: `url(${smallBanner2})`,
      h1: "Summer is Coming",
      p: "Hot summer equals summer shopping.",
      button: "Summer Shop",
      link: "/shop#trendingNow",
    },
    {
      id: 3,
      image: `url(${smallBanner3})`,
      h1: "World Cup 26",
      p: "Who are you supporting?",
      button: "Get jersey",
      link: "/shop#sportWears",
    },
  ];

  useEffect(() => {
  const autoplay = setInterval(() => {
    nextSlide();
  }, 5000);
  return () => clearInterval(autoplay);
}, []);

const prevSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
};

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
};

  return (
    <>
      <main className="home">
        <section className='heros'>
          
          <div
            style={{ backgroundImage: slides[currentIndex].image }}
            className="hero">
              <div key={slides[currentIndex].id} className="heroText">
                {slides[currentIndex].intro && <h5>{slides[currentIndex].intro}</h5>}
                <div className='heroLogo'>
                  {slides[currentIndex].logo && <img src={slides[currentIndex].logo} alt="" />}
                  {slides[currentIndex].subLogo && <h1>{slides[currentIndex].subLogo}</h1>}
                </div>
                
                
                <h2>{slides[currentIndex].subHead}</h2>
                {slides[currentIndex].h6 && <h6>{slides[currentIndex].h6}</h6>}
                <p>{slides[currentIndex].p}</p>
                
                <Link to={slides[currentIndex].link}>
                  {slides[currentIndex].button && <button>{slides[currentIndex].button}</button>}
                </Link>
              </div>
              
            <button className="heroSlider-btn heroSliderPrev" onClick={prevSlide}>
              &#8249;
            </button>
            <button className="heroSlider-btn heroSliderNext" onClick={nextSlide}>
              &#8250;
            </button>
            <div className="heroSlider-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>
          

        <section>
          <div className="bigBanners">
            {bigBanners.map((bigBanner) => (
              <div key={bigBanner.id} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bigBanner.image})`}} className='bigBanner'>
                <div className='bigBannerText'>
                  <h1>{bigBanner.h1}</h1>
                  <p>{bigBanner.p}</p>
                  <Link to={bigBanner.link} style={{ textDecoration: 'none' }}>
                    <button>{bigBanner.button}</button>
                  </Link>
                </div>
              </div>

            ))}
            
            
          </div>

          
            <div className="smallBanners">
            {smallBanners.map((smallBanner) => (
             <Link to={smallBanner.link} key={smallBanner.id} style={{ textDecoration: 'none' }}>
             <div key={smallBanner.id} style={{backgroundImage: smallBanner.image}} className='smallBanner'>
                <div className='smallBannerText'>
                  <h1>{smallBanner.h1}</h1>
                  <p>{smallBanner.p}</p>
                  <button>{smallBanner.button}</button>
                </div>
              </div>
              </Link>
            ))}
            </div>
          
          
        </section>



        <section className="flashSales">
          <FlashSales />
          <div>
          </div>
        </section>

        <section className="trendingNow">
          
          <div>
            
          </div>
        </section>

        <TrendingNow />
        <NewArrivals/>
      </main>
    </>
  );
}

export default Home;