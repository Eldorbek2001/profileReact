import React from "react";
import ReactDOM from "react-dom";

function Navbar(){

    const headerStyle = {
        navbarMain:{
            backgroundColor:"black"
        }
    }

return (
    <div className="header">
  <nav className="navbar navbar-dark navbar-expand-lg bg-black" style={headerStyle.navbarMain}>
    <div className="container-fluid d-flex justify-content-center">
      <ul className="navbar-nav me-auto mb-2 mb-lg-1 justify-content-center">
        <li className="nav-item">
          <a id = "navbar-landing" className="nav-link active text-white btn btn-lg mx-2 px-3" aria-current="page" href="/">getHomePage();</a>
        </li>
        <li className="nav-item">
          <a id = "navbar-education" className="nav-link active text-white btn btn-lg mx-2 px-3" aria-current="page" href="/education">getEducationBackground();</a>
        </li>
        <li className="nav-item">
          <a  id = "navbar-skills" className="nav-link active  text-white btn btn-lg mx-2 px-3" aria-current="page" href="/skills">getSkills();</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
)

}

export default Navbar