import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Product from "./Product";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="home">
      <div className="home__container">
        <AutoplaySlider
          className="home__image"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={2000}
        >
          <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" />
          <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_days/Uber_GW/D18787601_BAU_Xiaomi_Family_DesktopHero_1500x600_2._CB413305591_.jpg" />
          <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/GW_1500x600-min._CB406905169_.jpg" />
        </AutoplaySlider>
        <div className="home__row">
          <Product
            id="1"
            title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
            price={134900}
            image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Vivo V19 (Mystic Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={24990}
            image="https://images-na.ssl-images-amazon.com/images/I/61DlqYmSLOL._SL1024_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="JBL Flip 3 Stealth Waterproof Portable Bluetooth Speaker with Rich Deep Bass (Black), Without Mic"
            price={5299}
            image="https://images-na.ssl-images-amazon.com/images/I/81DRhqE04BL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Red Tape Men Full Sleeve Blue Sweatshirt"
            price={620}
            image="https://images-na.ssl-images-amazon.com/images/I/61FuYL2lkoL._UL1500_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Amazon Brand - Solimo Elite High Back Mesh Office Chair (Black)"
            price={9499}
            image="https://images-na.ssl-images-amazon.com/images/I/81U34n-jPdL._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="HP 23.8 inch(60.45 cm) Ultra-Thin Edge to Edge LED Backlit Computer Monitor - Full HD, IPS Panel with VGA, HDMI Ports - HP 24es Display - T3M79AA (Silver)"
            price={12299}
            image="https://images-na.ssl-images-amazon.com/images/I/81te-urLoDL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
