import React from "react"
import { ReactDOM } from "react"

function FooterElement(props){

    var link = props.link
    var name = props.name
    var icon = "fab fa-light fa-"+props.icon+" fa-lg footer-icon"
    return (
    
        <div className="col-lg-auto col-md-3 footer-icon-div">
        <a className="footer-icon" href={link} target="_blank" rel="noopener noreferrer">
            {name} <i className={icon}></i></a>
        </div>
    
    
    
    )
    
}

export default FooterElement