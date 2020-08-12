import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import LightboxModel from "../ReactLightBox/LightboxModel";
import logo3 from "../../assets/Images/logo3.png";

import pic1 from "../../assets/Images/rendering-services/1.jpg";
import pic2 from "../../assets/Images/rendering-services/2.jpg";
import pic3 from "../../assets/Images/rendering-services/3.jpg";

import pic5 from "../../assets/Images/rendering-services/5.jpg";
import pic6 from "../../assets/Images/rendering-services/6.jpg";
import pic7 from "../../assets/Images/rendering-services/7.jpg";
import pic8 from "../../assets/Images/rendering-services/8.jpg";
import pic9 from "../../assets/Images/rendering-services/9.jpg";
import pic10 from "../../assets/Images/rendering-services/10.jpg";
import ".././Foodmall/Foodmall.css";

class RenderingServices extends Component {
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
              RenderingServices
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

              <img src={pic1} class="rounded " alt="..." />
            </div>

            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic2} class="rounded " alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic3} class="rounded " alt="..." />
            </div>

            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic5} class="rounded " alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic6} class="rounded " alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic7} class="rounded " alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic8} class="rounded " alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic9} class="rounded " alt="..." />
            </div>
            <div class="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i class=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img src={pic10} class="rounded " alt="..." />
            </div>

            {/* <div class="col-md-4">
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
            </div> */}
            <div class="col-md-8"></div>
            <div class="col-md-4 main_div1">
              <div className="pro_image1">
                <h3 class=" plus_icon1 ">category</h3>
              </div>

              <Link to={"/Projects"}>
                <img src={""} class="rounded " alt="..." />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(RenderingServices);
