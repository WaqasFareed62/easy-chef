import React from "react";
import cook from "./cook.png";
import d from "./d.png";
import "./Home.css";
import Carousel from "../Carousel";
import Features from "../Tailwindsections/Features";
import Freerecipe from "../Tailwindsections/Freerecipe";
import Pricing from "../Tailwindsections/Pricing";
import Premiumrecipe from "../Tailwindsections/Premiumrecipe";
import Testimonials from "../Testimonials";
import Stats from "./Stats";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-5">
            <h1>
              Just Eat <span className="healthy">Healthy</span> Food to Live
              Longer & <span className="healthy">Aspiring Life</span>
            </h1>
            <p>
              Welcome to our recipe-based website dedicated to promoting a
              healthier lifestyle through the power of nutritious and delicious
              food. At [Your Website Name], we believe that what you eat plays a
              vital role in enhancing your overall well-being and extending your
              lifespan.{" "}
            </p>
            <button className="btn btn-success">Get latest Recipes</button>
            <div className="box">
              <img
                src={cook}
                className="cook"
                style={{ height: "200px" }}
                alt="Cook"
              />
              <div className="center">
                <div className="dialog-1">
                  <div className="left-point"></div>
                </div>
                <div className="dialog-2">
                  <h5 className="chef">Recommended by top chef</h5>
                  <div className="right-point"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 mt-4">
            <img
              src={d}
              className="plate"
              style={{ marginLeft: "50px" }}
              alt="Plate"
            />
          </div>
        </div>
      </div>

      <Features />
      <Freerecipe />
      <Pricing />
      <Premiumrecipe />
      <Testimonials />
      <Stats />
    </>
  );
}
