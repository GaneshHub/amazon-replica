import React from "react";
import "../css/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <a href="https://www.primevideo.com/region/eu/ref=dv_web_force_root/259-4592703-6839154">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
            alt=""
          />
        </a>
        <div className="home_row">
          <Product
            key="TB_00001"
            id="TB_00001"
            title="Vermont Teddy Bear Stuffed Animals - 18 Inch, Almond Brown, Super Soft"
            image="https://m.media-amazon.com/images/I/711SPVFO7HL._AC_UL480_FMwebp_QL65_.jpg"
            rating={2}
            price={31}
          />
          <Product
            key="TB_00002"
            id="TB_00002"
            title="Vermont Teddy Bear Giant Teddy Bear - Big Teddy Bear, 4 Foot"
            image="https://m.media-amazon.com/images/I/71JAcuPRDyL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
            price={90}
          />
          <Product
            key="TB_00003"
            id="TB_00003"
            title="Oitscute Small Baby Teddy Bear with Cloth Cute Stuffed Animal Soft Plush Toy 10 (Pink lace Dress with Rabbit)"
            image="https://m.media-amazon.com/images/I/71VF4NWzMBL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
            price={12}
          />
          <Product
            key="TB_00004"
            id="TB_00004"
            title="elfishgo Creative Light Up LED Inductive Teddy Bear Stuffed Animals Plush Toy Colorful Glowing Teddy Bear, 20- Inch(Pink)"
            image="https://m.media-amazon.com/images/I/51SB3lrb2zL._AC_UL480_QL65_.jpg"
            rating={3}
            price={16}
          />
        </div>
        <div className="home_row">
          <Product
            key="SMWTCH_00001"
            id="SMWTCH_00001"
            title="Garmin 010-01689-00 Forerunner 35; Easy-to-Use GPS Running Watch, Black"
            image="https://m.media-amazon.com/images/I/71wamdtiUHL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
            price={96}
          />
          <Product
            key="SMWTCH_00002"
            id="SMWTCH_00002"
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)"
            image="https://m.media-amazon.com/images/I/715obo1cz0L._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
            price={178}
          />
          <Product
            key="SMWTCH_00003"
            id="SMWTCH_00003"
            title="HalfSun Fitness Tracker, Activity Tracker Fitness Watch with Heart Rate Monitor, Blood Pressure Monitor, IP67 Waterproof Smart Watch with Sleep Monitor, Calorie Counter, Pedometer"
            image="https://m.media-amazon.com/images/I/51yb--paKZL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
            price={35}
          />
          <Product
            key="SMWTCH_00004"
            id="SMWTCH_00004"
            title="NiceFuse Smart Watch, Fitness Tracker Health Watch with Heart Rate Blood Oxygen Monitor, Multiple Sport Modes, Waterproof Activity Tracker Smartwatches with Sleep Monitor"
            image="https://m.media-amazon.com/images/I/41uBkd5rZVL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
            price={50}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
