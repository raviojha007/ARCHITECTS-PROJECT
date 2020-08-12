import React, { useEffect } from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar.js";
import Projects from "./Components/Projects/Projects.js";
import About from "./Components/About/About.js";
import Foodmall from "./Components/Foodmall/Foodmall.js";
import Bladeshouse from "./Components/Bladeshouse/Bladeshouse.js";
import Bunglow from "./Components/Bunglow/Bunglow.js";
import CourtBuilding from "./Components/CourtBuilding/CourtBuilding.js";
import Eugenearcade from "./Components/Eugenercade/Eugenearcade.js";
import Gwaliorresort from "./Components/Gwaliorresort/Gwaliorresort.js";
import Mcthouse from "./Components/Mcthouse/Mcthouse.js";
import Mctinteriors from "./Components/Mctinteriors/Mctinteriors.js";
import Home from "./Components/Home/Home.js";
import MlaHouse from "./Components/MlaHouse/MlaHouse.js";
import RenderingServices from "./Components/RenderingServices/RenderingServices.js";
// import Loading from "./Components/Loading/Loading.js";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route exact path="/Projects/Foodmall">
            <Foodmall />
          </Route>
          <Route exact path="/Projects/Bladeshouse">
            <Bladeshouse />
          </Route>
          <Route exact path="/Projects/Bunglow">
            <Bunglow />
          </Route>
          <Route exact path="/Projects/CourtBuilding">
            <CourtBuilding />
          </Route>
          <Route exact path="/Projects/Eugenearcade">
            <Eugenearcade />
          </Route>
          <Route exact path="/Projects/Gwaliorresort">
            <Gwaliorresort />
          </Route>
          <Route exact path="/Projects/Mcthouse">
            <Mcthouse />
          </Route>
          <Route exact path="/Projects/Mctinteriors">
            <Mctinteriors />
          </Route>
          <Route exact path="/Projects/MlaHouse">
            <MlaHouse />
          </Route>
          <Route exact path="/Projects/RenderingServices">
            <RenderingServices />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
