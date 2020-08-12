import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

import FoodMall1 from "../../assets/Images/foodmall-baroda/Photo1.jpg";
import FoodMall2 from "../../assets/Images/foodmall-baroda/Photo3.jpg";
import Bladeshouse1 from "../../assets/Images/blades-house/img570.jpg";
import Bladeshouse2 from "../../assets/Images/blades-house/img797.jpg";
import Bladeshouse3 from "../../assets/Images/blades-house/img804.jpg";
import Bladeshouse4 from "../../assets/Images/blades-house/img811.jpg";
import Bunglow1 from "../../assets/Images/bunglow/1.jpg";
import Bunglow2 from "../../assets/Images/bunglow/2_Photo-4.jpg";
import Bunglow3 from "../../assets/Images/bunglow/2_Photo-5.jpg";
import Bunglow4 from "../../assets/Images/bunglow/2_Photo-7.jpg";
import Bunglow5 from "../../assets/Images/bunglow/3_Photo-12.jpg";
import Bunglow6 from "../../assets/Images/bunglow/3_Photo-13.jpg";
import Bunglow7 from "../../assets/Images/bunglow/3_Photo-14.jpg";
import Bunglow8 from "../../assets/Images/bunglow/4_Photo-2.jpg";
import CourtBuilding1 from "../../assets/Images/court_building_silvassa/1.jpg";
import CourtBuilding2 from "../../assets/Images/court_building_silvassa/3_Photo-23.jpg";
import CourtBuilding3 from "../../assets/Images/court_building_silvassa/3_Photo-17.jpg";
import CourtBuilding4 from "../../assets/Images/court_building_silvassa/3_Photo-15.jpg";
import CourtBuilding5 from "../../assets/Images/court_building_silvassa/3_Photo-16.jpg";
import CourtBuilding6 from "../../assets/Images/court_building_silvassa/3_Photo-25.jpg";
import Eugenearcade1 from "../../assets/Images/eugene-arcade/img25.jpg";
import Eugenearcade2 from "../../assets/Images/eugene-arcade/img28.jpg";
import Eugenearcade3 from "../../assets/Images/eugene-arcade/img31.jpg";
import Eugenearcade4 from "../../assets/Images/eugene-arcade/img34.jpg";
import Eugenearcade5 from "../../assets/Images/eugene-arcade/img37.jpg";
import Eugenearcade6 from "../../assets/Images/eugene-arcade/img40.jpg";
import Eugenearcade7 from "../../assets/Images/eugene-arcade/img43.jpg";
import Eugenearcade8 from "../../assets/Images/eugene-arcade/img46.jpg";
import Gwaliorresort1 from "../../assets/Images/gwalior-resort/2.jpg";
import Gwaliorresort2 from "../../assets/Images/gwalior-resort/3.jpg";
import Gwaliorresort3 from "../../assets/Images/gwalior-resort/5.jpg";
import Gwaliorresort4 from "../../assets/Images/gwalior-resort/8.jpg";
import Mcthouse1 from "../../assets/Images/MCT-House/2.JPG";
import Mcthouse2 from "../../assets/Images/MCT-House/1.JPG";
import Mctinteriors02 from "../../assets/Images/mct-house-interiors/02.jpg";
import Mctinteriors3 from "../../assets/Images/mct-house-interiors/3.jpg";
import Mctinteriors03 from "../../assets/Images/mct-house-interiors/03.jpg";
import Mctinteriors01 from "../../assets/Images/mct-house-interiors/01.jpg";
import Mctinteriors1 from "../../assets/Images/mct-house-interiors/1.jpg";
import Mctinteriors2 from "../../assets/Images/mct-house-interiors/2.jpg";
import Mctinteriors04 from "../../assets/Images/mct-house-interiors/04.jpg";
import Mctinteriors05 from "../../assets/Images/mct-house-interiors/05.jpg";
import Mctinteriors06 from "../../assets/Images/mct-house-interiors/06.jpg";
import Mctinteriors07 from "../../assets/Images/mct-house-interiors/07.jpg";
import Mctinteriors08 from "../../assets/Images/mct-house-interiors/08.jpg";
import "./Lightbox.css";
const images = [];

export default class LightboxModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      // isOpen: false,
    };
  }
  // componentWillUpdate(prevProps, prevState) {
  //   // console.log(prevState);
  //   // console.log(prevProps);
  //   if (prevState.isOpen !== prevProps.OpenLightBox) {
  //     this.setState({
  //       isOpen: !this.props.OpenLightBox,
  //     });
  //   }
  // }
  componentDidMount() {
    if (this.props.path === "/Projects/Foodmall") {
      while (images.length > 0) {
        images.pop();
      }
      images.push(FoodMall1, FoodMall2);
    } else if (this.props.path === "/Projects/Bladeshouse") {
      while (images.length > 0) {
        images.pop();
      }

      images.push(Bladeshouse1, Bladeshouse2, Bladeshouse3, Bladeshouse4);
    } else if (this.props.path === "/Projects/Bunglow") {
      while (images.length > 0) {
        images.pop();
      }
      images.push(
        Bunglow1,
        Bunglow2,
        Bunglow3,
        Bunglow4,
        Bunglow5,
        Bunglow6,
        Bunglow7,
        Bunglow8
      );
    } else if (this.props.path === "/Projects/CourtBuilding") {
      while (images.length > 0) {
        images.pop();
      }
      images.push(
        CourtBuilding1,
        CourtBuilding2,
        CourtBuilding3,
        CourtBuilding4,
        CourtBuilding5,
        CourtBuilding6
      );
    } else if (this.props.path === "/Projects/Eugenearcade") {
      while (images.length > 0) {
        images.pop();
      }
      images.push(
        Eugenearcade1,
        Eugenearcade2,
        Eugenearcade3,
        Eugenearcade4,
        Eugenearcade5,
        Eugenearcade6,
        Eugenearcade7,
        Eugenearcade8
      );
    } else if (this.props.path === "/Projects/Gwaliorresort") {
      while (images.length > 0) {
        images.pop();
      }
      images.push(
        Gwaliorresort1,
        Gwaliorresort2,
        Gwaliorresort3,
        Gwaliorresort4
      );
    } else if (this.props.path === "/Projects/Mcthouse") {
      while (images.length > 0) {
        images.pop();
      }
      images.push(Mcthouse1, Mcthouse2);
    } else if (this.props.path === "/Projects/Mctinteriors") {
      while (images.length > 0) {
        images.pop();
      }
      images.push(
        Mctinteriors02,
        Mctinteriors3,
        Mctinteriors03,
        Mctinteriors01,
        Mctinteriors1,
        Mctinteriors2,
        Mctinteriors04,
        Mctinteriors05,
        Mctinteriors06,
        Mctinteriors07,
        Mctinteriors08
      );
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { OpenLightBox, OpenModel } = this.props;
    {
      console.log(this.props);
    }
    return (
      <div>
        {/* <button
          className="btn btn-primary"
          type="button"
          onClick={() => this.setState({ isOpen: true })}
        >
          Preview
        </button> */}

        {OpenLightBox && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => OpenModel(!OpenLightBox)}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
