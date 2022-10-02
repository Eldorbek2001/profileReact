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
<div className="myshadow">
        <div className="me">
        <img className="profile profile-pic" src="images/profilepic.jpg" alt="profile-pic.jpg" />
        <br />
        <p style={{marginTop: "10px", fontSize: "20px"}}>Ali, Computer Science student at the University of Arizona.</p>
        <p style={{marginTop: "10px", fontSize: "25px", color:"white"}}>I love coding, creating, and building stuff.</p>
        </div>
        <img style = {{border: "solid 0px white"}} className="skill-gif" src="/gifs/landing_final.gif" alt="gif should be here" />
    </div>
  <div className="home-info" id="message">
    <Experiences />
    <Projects />
  </div>
</div>    
)
}


export default Landing