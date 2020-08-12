import React, { Component } from "react";
import { withRouter } from "react-router";

import logo1 from "../../assets/Images/logo1.png";

import "./About.css";
import ".././Foodmall/Foodmall.css";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.pathname);
  }
  render() {
    return (
      <div className="About__div">
        <div style={{ backgroundColor: "white" }} className="row  no-gutters ">
          <div className="col-md-4 img__logo">
            <img className="logo" src={logo1}></img>
          </div>
          <div className="col-md-4">
            <h1
              style={{ color: "black", marginTop: 60 }}
              className=" text-center"
            >
              {" "}
            </h1>
          </div>
        </div>

        <div className="p-4 ">
          <div className="row">
            <div className="col-md-4">
              <h1>About Us</h1>
            </div>
            <div className="col-md-8">
              <p>
                Earthfirm Architects is a full-service architecture and interior
                design resource that concentrates on the built narrative –
                architecture, urban design and landscape – to make vital,
                exciting destinations out of clients' tangible and intangible
                requirements. It is a scaleable, modular company, combining the
                strengths of its own office with a highly talented and
                experienced network of consulting architects, designers,
                engineers and other specialists. In particular, Earthfirm
                Architects revels in projects that pose unique challenges and
                require unexpected, innovative and highly creative solutions.
                Our directors and their team's skills lie in effective
                conceptualization, design and delivery of signature projects in
                several different countries and cultures, providing global
                design solutions in keeping with local technology and processes.
                Every project done by the teams in India and the United States
                is a design competition, where alternative interpretations of
                the design brief are extended into conceptual derivatives that
                bind the project, and hold the essence of the design through
                development. A large amount of work done by Earthfirm Architects
                is research driven, where the design grows around an idea, or is
                a stream of thought that allows reinterpretation and
                re-evaluation of commonly assumed paradoxes. This keeps them
                questioning the established, and establishing his questions.
                Needless to say, every project concludes with more questions
                than answers – for themself – while the client gets better
                solutions. Our directors actively involve’s himself in
                activities including feasibility studies and financial modeling
                for projects, necessitating an often steep learning curve while
                working on projects in other countries. We place human
                experience at the center of our design in order to deliver
                engaging, future oriented projects that respond to the people
                actually use space.
              </p>
            </div>
            <div className="col-md-4">
              <h1> Culture</h1>
            </div>
            <div className="col-md-8">
              <p>
                Earthfirm Architects works as a design studio, where every
                member of the team takes ownership of his or her work, and is
                encouraged to make mistakes, the more the better, and to learn
                from them. Each person within the firm is actively encouraged to
                pursue their own passions, including playing music, dance,
                writing, theater, fashion designing and many such that not only
                make the workplace positive, but help each employee understand
                and empathize with others. Seniors are encouraged to improve
                themselves and pass it along to juniors, and projects are
                occasionally designed through simply because they provide an
                excellent platform to hone and improve some skill or improve the
                functioning of the team. There is no direct micro-management
                where not required, and delegation is encouraged. Everyone is
                allowed to perform in a manner that brings out what they are
                best at. This improves morale, increases productivity, and
                allows for a much wider range of skills to be learnt.
              </p>
            </div>
            <div className="col-md-4">
              <h1>Process</h1>
            </div>
            <div className="col-md-8">
              <p>
                Each project team is headed by a senior who is a mentor for the
                team. The team defines the direction and the narrative of the
                project, and all members are encouraged to interact with clients
                to understand the project and the client better. Projects are
                divided on the basis of criteria that include time frame,
                research required, resources available, and mandatory inclusion
                of a team member who has no experience with that particular
                typology, to provide an unbiased design perspective during the
                process. Clients are encouraged to be a part of the process, and
                all sketches and process diagrams are shared throughout the
                project. The design process and its narration are considered
                equally important, to ensure the why is as important as the
                what, through all stages of design. The methodology of project
                design is a seamless transition through research, concept and
                design, often requiring an education in local culture,
                technologies and methodologies. Our directors and their team at
                Earthfirm Architects have worked and continue to work in over 15
                countries around the world, and still find exciting newness in
                it all, every day.
              </p>
            </div>
            <div className="col-md-4">
              <h1> LeaderShip</h1>
            </div>
            <div className="col-md-8">
              <p>
                Earthfirm Architects design expertise is unpinned by highly
                collaborative leaders who span sector, disciplines, and global
                market, directing dynamic design team to deliver People
                Architecture.
              </p>
            </div>
            <div className="col-md-4">
              <h1>Strength Of EARTHFIRM </h1>
            </div>
            <div className="col-md-8">
              <p>
                <strong>
                  Integrated Multi-Disciplinary Consultancy Services offered by
                  Earthfirm.
                </strong>
              </p>
              <ul>
                <li>Architectural Consultancy Services</li>
                <li>Interior Designing</li>
                <li>Urban &amp; Infrastructure Planning</li>
                <li>Landscape</li>
                <li>3D Modeling/Rendering</li>
                <li>PMC</li>
                <li>Healthcare Planning</li>
                <li>Engineering Solutions</li>
                <li>MEPF Design</li>
                <li>Liasoning Consultants</li>
                <li>Land Acquisition</li>
                <li>Business Development Consultants</li>
                <li>
                  Social engineering for Economical Weaker Section and Lower
                  Income Group
                </li>
              </ul>
              <p>
                <strong>Our Team at Earthfirm</strong>
              </p>

              <ul>
                <li>Architects</li>
                <li>Planners</li>
                <li>Design Engineers</li>
                <li>Interior Designers</li>
                <li>3D Visualizers</li>
                <li>Reg. Valuers</li>
              </ul>
            </div>
          </div>
          <hr style={{ backgroundColor: "white", height: 3 }}></hr>
          <div className="row">
            <div className="col-md-8">
              <p>© 2020 Earthfirm Architects. All rights reserved</p>
              <p style={{ fontSize: 12 }}>
                Developed & Maintained by : Ravi Ojha & Harsh Chauhan
              </p>
            </div>
            <div className="col-md-4 ">
              <a href="https://www.instagram.com/earthfirmarchitects/?hl=en">
                <i
                  style={{ color: "white", padding: 20 }}
                  class="fab fa-instagram fa-3x"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="https://www.facebook.com/earthfirmarchitects/?ti=as">
                <i
                  style={{ color: "white", padding: 20 }}
                  class="fab fa-facebook-f fa-3x"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="https://www.linkedin.com/company/earthfirm-architects">
                <i
                  style={{ color: "white", padding: 20 }}
                  class="fab fa-linkedin fa-3x"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(About);
