import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import pic02 from "../../assets/Images/mct-house-interiors/02.jpg";
import pic3 from "../../assets/Images/mct-house-interiors/3.jpg";
import pic03 from "../../assets/Images/mct-house-interiors/03.jpg";
import pic01 from "../../assets/Images/mct-house-interiors/01.jpg";
import pic1 from "../../assets/Images/mct-house-interiors/1.jpg";
import pic2 from "../../assets/Images/mct-house-interiors/2.jpg";
import pic04 from "../../assets/Images/mct-house-interiors/04.jpg";
import pic05 from "../../assets/Images/mct-house-interiors/05.jpg";
import pic06 from "../../assets/Images/mct-house-interiors/06.jpg";
import pic07 from "../../assets/Images/mct-house-interiors/07.jpg";
import pic08 from "../../assets/Images/mct-house-interiors/08.jpg";
//import masterplan from "../../Images/mct-house-interiors/MASTERPLAN/MASTERPLAN.jpg";
import LightboxModel from "../ReactLightBox/LightboxModel";
import logo3 from "../../assets/Images/logo3.png";
import ".././Foodmall/Foodmall.css";

class Mctinteriors extends Component {
  render() {
    return (
      <div>
        <div className="row no-gutters header_outer1">
          <div className="col-md-4 img__logo">
            <img className="logo" src={logo3}></img>
          </div>
          <div className="col-md-4">
            <h1
              style={{ color: "white", marginTop: 60 }}
              className=" text-center"
            >
              {" "}
              Mctinteriors
            </h1>
          </div>
        </div>
        <div className="p-4">
          <div className="row">
            <div className="col-md-4 main_div1">
              <LightboxModel path={this.props.location.pathname} />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic1}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>

            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic01}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>
            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic02}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>
            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic2}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>
            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic03}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>
            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic3}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>
            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic04}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>
            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic05}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>
            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic06}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>
            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic07}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>
            <div className="col-md-4 main_div1">
              <LightboxModel />
              <div className="pro_image1">
                <i className=" plus_icon1 fa fa-plus fa-2x"></i>
              </div>

              <img
                src={pic08}
                className="rounded  h-50 w-100 d-block"
                alt="..."
              />
            </div>

            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="">
                <h3>Client :- Mr. Ds sharma</h3>
                <hr />

                <h3>
                  Project :- Providing architectural consultancy services for
                  infrastructure and development for Resort in Gwalior city .
                </h3>
                <hr />

                <h3>Site area :- 24000 sq.mt</h3>
                <hr />

                <h3>Location :- Gwalior , MP</h3>
                <hr />

                <h3>Architect :- Earthfirm architects .</h3>
                <hr />
              </div>
            </div>
            <div className="col-md-8"></div>
            <div className="col-md-4 main_div1">
              <div className="pro_image1">
                <h3 className=" plus_icon1 ">category</h3>
              </div>

              <Link to={"/Projects"}>
                <img
                  src={"masterplan"}
                  className="rounded  h-50 w-100 d-block"
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
export default withRouter(Mctinteriors);
