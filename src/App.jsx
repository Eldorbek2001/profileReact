import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import  Footer from "./components/Footer";
import  Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import {Route, Link} from "react-router-dom";

function App(){

return (


    <div>
    <Router>

        <Route path="/" render = {()=>
            <Fragment>
                <Navbar />
                <Landing />
                <Footer />
            </Fragment>
        } />
         <Route path="/education" render = {()=>
            <Fragment>
                <Landing />
                <Footer />
            </Fragment>
        } />
        <Route path="/background" render = {()=>
            <Fragment>
                <Navbar />
                <Landing />
            </Fragment>
        } />

        </Router>

    </div>
)
}


export default App