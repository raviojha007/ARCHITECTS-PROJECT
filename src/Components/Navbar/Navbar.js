import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  openNav = () => {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("open").style.display = "none";
  };

  closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("open").style.display = "block";
  };
  render() {
    return (
      <div>
        <span
          id="open"
          className="ham"
          style={{ fontSize: "30px", cursor: "pointer", marginLeft: "90%" }}
          onClick={this.openNav}
        >
          ☰
        </span>
        <div id="myNav" className="overlay">
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNav}
          >
            ×
          </a>
          <div className="overlay-content">
            <Link to="/" onClick={this.closeNav}>
              Home
            </Link>
            <Link to="/Projects" onClick={this.closeNav}>
              Projects
            </Link>
            <Link to="/About" onClick={this.closeNav}>
              About
            </Link>
            <Link to="#" onClick={this.closeNav}>
              Clients
            </Link>
            <Link to="#" onClick={this.closeNav}>
              Career
            </Link>
            <Link to="#" onClick={this.closeNav}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <span
            id="open"
            className="ham"
            style={{ fontSize: "30px", cursor: "pointer", marginLeft: "90%" }}
            onClick={this.openNav}
          >
            ☰
          </span>
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
              <img
                src="https://cdn.britannica.com/28/116528-050-1CAC6728/Great-Court-Foster-and-Partners-British-Museum-2000.jpg"
                class=""
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.britannica.com/28/116528-050-1CAC6728/Great-Court-Foster-and-Partners-British-Museum-2000.jpg"
                class=""
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.britannica.com/28/116528-050-1CAC6728/Great-Court-Foster-and-Partners-British-Museum-2000.jpg"
                class=""
                alt="..."
              />
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
        </div> */}
      </div>
    );
  }
}
