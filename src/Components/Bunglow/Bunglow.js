import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import pic1 from "../../assets/Images/bunglow/1.jpg";
import pic2 from "../../assets/Images/bunglow/2_Photo-4.jpg";
import pic3 from "../../assets/Images/bunglow/2_Photo-5.jpg";
import pic4 from "../../assets/Images/bunglow/2_Photo-7.jpg";
import pic5 from "../../assets/Images/bunglow/3_Photo-12.jpg";
import pic6 from "../../assets/Images/bunglow/3_Photo-13.jpg";
import pic7 from "../../assets/Images/bunglow/3_Photo-14.jpg";
import pic8 from "../../assets/Images/bunglow/4_Photo-2.jpg";
import masterplan from "../../assets/Images/bunglow/MASTERPLAN/BUNGLOW_MASTER_PLAN.jpg";

import LightboxModel from "../ReactLightBox/LightboxModel";
import logo3 from "../../assets/Images/logo3.png";
import ".././Foodmall/Foodmall.css";

class Bunglow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OpenLightBox: false,
    };
  }
  OpenModel = (set) => {
    this.setState({
      OpenLightBox: set,
    });
  };
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
              Bunglow
            </h1>
          </div>
        </div>

        <div class="p-4">
          <div class="row">
            <div class="col-md-4 main_div1" onClick={this.OpenModel}>
              <LightboxModel
                OpenLightBox={this.state.OpenLightBox}
                path={this.props.location.pathname}
                OpenModel={this.OpenModel}
              />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic1} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div class="col-md-4 main_div1" onClick={this.OpenModel}>
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic2} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div class="col-md-4 main_div1" onClick={this.OpenModel}>
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic3} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div
              style={{ marginTop: 10 }}
              class="col-md-4 main_div1"
              onClick={this.OpenModel}
            >
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic4} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div
              style={{ marginTop: 10 }}
              class="col-md-4 main_div1"
              onClick={this.OpenModel}
            >
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic5} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div
              style={{ marginTop: 10 }}
              class="col-md-4 main_div1"
              onClick={this.OpenModel}
            >
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic6} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div
              style={{ marginTop: 10 }}
              class="col-md-4 main_div1"
              onClick={this.OpenModel}
            >
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic7} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div
              style={{ marginTop: 10 }}
              class="col-md-4 main_div1"
              onClick={this.OpenModel}
            >
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic8} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
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
export default withRouter(Bunglow);
