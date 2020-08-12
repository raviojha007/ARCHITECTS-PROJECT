import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import pic1 from "../../assets/Images/court_building_silvassa/1.jpg";

import pic2 from "../../assets/Images/court_building_silvassa/3_Photo-23.jpg";
import pic3 from "../../assets/Images/court_building_silvassa/3_Photo-17.jpg";
import pic4 from "../../assets/Images/court_building_silvassa/3_Photo-15.jpg";
import pic5 from "../../assets/Images/court_building_silvassa/3_Photo-16.jpg";
import pic6 from "../../assets/Images/court_building_silvassa/3_Photo-25.jpg";
import masterplan from "../../assets/Images/court_building_silvassa/MASTERPLAN/MASTER_PLAN.jpg";

import LightboxModel from "../ReactLightBox/LightboxModel";
import logo3 from "../../assets/Images/logo3.png";
import ".././Foodmall/Foodmall.css";

class CourtBuilding extends Component {
  render() {
    return (
      <div>
        <div className="row  no-gutters header_outer1">
          <div className="col-md-4 img__logo">
            <img className="logo" src={logo3}></img>
          </div>
          <div className="col-md-4">
            <h1
              style={{ color: "white", marginTop: 60 }}
              className=" text-center"
            >
              {" "}
              CourtBuilding
            </h1>
          </div>
        </div>

        <div class="p-4">
          <div class="row">
            <div class="col-md-4 main_div1">
              <LightboxModel path={this.props.location.pathname} />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic1} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic2} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic3} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic4} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic5} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic6} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div class="col-md-8"></div>
            <div class="col-md-4">
              <div className="">
                <h3>Client :- Mr. kirtisinh D. Jadeja</h3>
                <hr />

                <h3>
                  Project :- Providing architectural consultancy services for
                  infrastructure and development for express food-mall at Baroda
                </h3>
                <hr />

                <h3>Site area :- 2710 sq.mt</h3>
                <hr />

                <h3>Location :- Baroda , Gujarat</h3>
                <hr />

                <h3>Architect :- Earthfirm architects</h3>
                <hr />
              </div>
            </div>
            <div class="col-md-8"></div>
            <div class="col-md-4 main_div1">
              <div className="pro_image1">
                <h3 class=" plus_icon1 ">category</h3>
              </div>
              <Link to={"/Projects"}>
                <img
                  src={masterplan}
                  class="rounded  h-50 w-100 d-block"
                  alt="..."
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(CourtBuilding);
