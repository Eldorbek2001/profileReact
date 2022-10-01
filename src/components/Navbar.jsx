import React from "react";
import ReactDOM from "react-dom";

function Navbar(){

    const headerStyle = {
        navbarMain:{
            backgroundColor:"black"
        }
    }

return (
    <div class="header">
  <nav class="navbar navbar-dark navbar-expand-lg bg-black" style={headerStyle.navbarMain}>
    <div class="container-fluid d-flex justify-content-center">
      <ul class="navbar-nav me-auto mb-2 mb-lg-1 justify-content-center">
        <li class="nav-item">
          <a id = "navbar-landing"class="nav-link active text-white btn btn-lg mx-2 px-3" aria-current="page" href="/">getHomePage();</a>
        </li>
        <li class="nav-item">
          <a id = "navbar-education" class="nav-link active text-white btn btn-lg mx-2 px-3" aria-current="page" href="/education">getEducationBackground();</a>
        </li>
        <li class="nav-item">
          <a  id = "navbar-skills" class="nav-link active  text-white btn btn-lg mx-2 px-3" aria-current="page" href="/skills">getSkills();</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
)

}

export default Navbar