import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import LightboxModel from "../ReactLightBox/LightboxModel";
import logo3 from "../../assets/Images/logo3.png";
import ".././Foodmall/Foodmall.css";
import pic1 from "../../assets/Images/mla-housing-jaipur/03.jpg";
import pic2 from "../../assets/Images/mla-housing-jaipur/4BHK.jpg";
import pic3 from "../../assets/Images/mla-housing-jaipur/07.jpg";
import pic4 from "../../assets/Images/mla-housing-jaipur/08.jpg";
import pic5 from "../../assets/Images/mla-housing-jaipur/09.jpg";
import pic6 from "../../assets/Images/mla-housing-jaipur/SITE.jpg";
import pic7 from "../../assets/Images/mla-housing-jaipur/SITE-1.jpg";
import masterplan from "../../assets/Images/mla-housing-jaipur/MASTERPLAN/masterplan.jpg";

class MlaHouse extends Component {
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
              Mlahouse
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
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic7} class="rounded  h-50 w-100 d-block" alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <h3 class=" plus_icon1 "></h3>
              </div>

              <img
                style={{ height: "500px", width: "100px" }}
                src={masterplan}
                class="rounded    d-block"
                alt="..."
              />
            </div>

            <div class="col-md-4">
              <div className="">
                <h3>Client :- Jaipur Development authorioty.</h3>
                <hr />

                <h3>
                  Project :- :- Providing architectural consultancy services for
                  multi-storied MLA Flats at Vidhayak Nagar (West), Jyoti Nagar,
                  Jaipur
                </h3>
                <hr />

                <h3>Site area :- 24171 sq.mt</h3>
                <hr />

                <h3>Location :-Jaipur , Rajasthan.</h3>
                <hr />

                <h3>Architect :- Earthfirm architects .</h3>
                <hr />
              </div>
            </div>
            <div class="col-md-8"></div>
            <div class="col-md-4 main_div1">
              <div className="pro_image1">
                <h3 class=" plus_icon1 ">category</h3>
              </div>

              <Link to={"/Projects"}>
                <img src={""} class="rounded  h-50 w-100 d-block" alt="..." />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MlaHouse);
