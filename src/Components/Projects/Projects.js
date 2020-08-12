import React, { Component } from "react";
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
import "./Projects.css";
import { Link } from "react-router-dom";

export default class Projects extends Component {
  Images = [
    {
      uri: foodmall,
      href: "",
    },
    {
      uri: bladeshouse,
    },
    { uri: bunglow },
    { uri: courtbuilding },
    { uri: enugenearcade },
    { uri: gwaliorResort },
    { uri: MCTHouse },
    { uri: MCTInteriors },
    { uri: MLAhouse },
    { uri: RenderingServices },
  ];
  render() {
    return (
      <div>
        <div className="row Tag-Line_outer no-gutters">
          <div className="col-md-4">
            <img className="logo" src={logo1}></img>
          </div>
          <div className="col-md-4">
            <h1 className=" text-center Tag-Line"></h1>
          </div>
        </div>
        <nav className="navbar navbar-expand-sm navbar-light bg-dark">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/Projects">
                  SHOW ALL <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Projects/Bladeshouse">
                  COMMERCIAL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Projects/Bunglow">
                  HOSPITALITY
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/Projects/CourtBuilding">
                  INSTIUTIONAL
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/Projects/Eugenearcade">
                  INTERIORS
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to="/Projects/Foodmall" className="nav-link">
                  RENDERING SERVICES
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="/Projects/Gwaliorresort">
                  RESIDENTIAL
                </Link>
              </li>{" "}
            </ul>
          </div>
        </nav>
        <div className="">
          <div className="row no-gutters">
            <div className="col-md main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="/Projects/Foodmall">
                <img src={foodmall} className="rounded  proImage " alt="..." />
              </Link>
            </div>
            <div className="col-md main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="/Projects/Eugenearcade">
                <img
                  src={enugenearcade}
                  className="rounded proImage  "
                  alt="..."
                />
              </Link>
            </div>
            <div className="col-md main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="/Projects/Bladeshouse">
                <img
                  src={bladeshouse}
                  className="rounded  proImage "
                  alt="..."
                />
              </Link>
            </div>
          </div>
          <div className="row  no-gutters">
            <div className="col-md main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="/Projects/Bunglow">
                <img src={bunglow} className="rounded  proImage " alt="..." />
              </Link>
            </div>
            <div className="col-md main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="/Projects/CourtBuilding">
                <img
                  src={courtbuilding}
                  className="rounded proImage  "
                  alt="..."
                />
              </Link>
            </div>
            <div className="col-md main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="/Projects/Gwaliorresort">
                <img
                  src={gwaliorResort}
                  className="rounded  proImage "
                  alt="..."
                />
              </Link>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-4 main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="/Projects/Mctinteriors">
                <img
                  src={MCTInteriors}
                  className="rounded  proImage "
                  alt="..."
                />
              </Link>
            </div>
            <div className="col-md main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="">
                <img src={MLAhouse} className="rounded proImage  " alt="..." />
              </Link>
            </div>
            <div className="col-md main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="">
                <img
                  src={RenderingServices}
                  className="rounded  proImage "
                  alt="..."
                />
              </Link>
            </div>
          </div>
          <div className="row no-gutters ">
            <div className="col-md-4 main_div">
              <div className="pro_image">
                <i
                  className="plus_icon fa fa-plus fa-2x"
                  aria-hidden="true"
                ></i>
              </div>
              <Link to="/Projects/Mcthouse">
                <img src={MCTHouse} className="rounded  proImage " alt="..." />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
