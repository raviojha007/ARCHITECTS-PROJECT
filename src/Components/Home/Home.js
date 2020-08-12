import React, { Component } from "react";
import { Link } from "react-router-dom";
import foodmall from "../../assets/Images/foodmall.jpg";
import bladeshouse from "../../assets/Images/bladeshouse.jpg";
import bunglow from "../../assets/Images/bunglow.jpg";
import courtbuilding from "../../assets/Images/courtbuilding.jpg";
import enugenearcade from "../../assets/Images/eugenearcade.jpg";
import gwaliorResort from "../../assets/Images/gwaliorResort.jpg";
import MCTHouse from "../../assets/Images/MCThouse.JPG";
import MCTInteriors from "../../assets/Images/MCTInteriors.jpg";
import MLAhouse from "../../assets/Images/MLAhouse.jpg";
import RenderingServices from "../../assets/Images/RenderingServices.jpg";
import logo1 from "../../assets/Images/logo1.png";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div className="logo__div">
            <img className="logo__img" src={logo1}></img>
          </div>
          {/* <span
            id="open"
            className="ham"
            style={{ fontSize: "30px", cursor: "pointer", marginLeft: "90%" }}
            onClick={this.openNav}
          >
            ☰
          </span> */}
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Link to={"/Projects/Foodmall"}>
                <img src={foodmall} class="" />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to={"/Projects/Bladeshouse"}>
                <img src={bladeshouse} class="" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to={"/Projects/Bunglow"}>
                <img src={bunglow} class="" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to={"/Projects/CourtBuilding"}>
                <img src={courtbuilding} class="" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to={"/Projects/Eugenearcade"}>
                <img src={enugenearcade} class="" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to={"/Projects/Gwaliorresort"}>
                <img src={gwaliorResort} class="" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to={"/Projects/Mcthouse"}>
                <img src={MCTHouse} class="" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <Link to={"/Projects/Mctinteriors"}>
                <img src={MCTInteriors} class="" alt="..." />
              </Link>
            </div>
            <div class="carousel-item">
              <img src={MLAhouse} class="" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={RenderingServices} class="" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
