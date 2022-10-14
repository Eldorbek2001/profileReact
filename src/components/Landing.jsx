import React from "react";
import { ReactDOM } from "react";
import Experiences from "./Experiences";
import MyShadowArea from "./MyShadowArea";
import Projects from "./Projects";

function Landing(){

    const landingStyle = {
        projectBox :{

        }
    }
return (
<div className = "landing">
  <MyShadow />

  <div className="home-info" id="message">
    <Experiences />
    <Projects />
  </div>
</div>    
)
}


export default Landing