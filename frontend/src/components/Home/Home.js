import React from "react";
import cook from "./cook.png";
import d from "./d.png";
import "./Home.css";
import Carousel from "../Carousel";
import Features from "../Tailwindsections/Features";
import Freerecipe from "../Tailwindsections/Freerecipe";
import Pricing from "../Tailwindsections/Pricing";

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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
            <button className="btn btn-success">Order Now</button>
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
    </>
  );
}
