import React from "react";
import ReactDOM from "react-dom";
import FooterIcon from "./FooterIcon";

function Footer(){
    const footerStyle = {
        main:{
            backgroundColor: "black"
        },
        footerContainerFluid :{
            marginLeft:"auto",
            marginRight: "auto",
        },
        row:{
          alignSelf:"center"
        }
    }


return (
 <div className="container col-12" style={footerStyle.main}>
        <footer className="py-3 my-4">
            <div className="footer container-fluid" style={footerStyle.footerContainerFluid}> 
            <div className="row" style={footerStyle.row}>
               <div className="col-lg-auto col-md-3 footer-icon-div">
                    <a className="footer-icon" href="https://www.instagram.com/aliyelbekov/" target="_blank" rel="noopener noreferrer">
                    Instagram <i className="fab fa-light fa-instagram fa-lg footer-icon"></i></a>
                </div>
                <div className="col-lg-auto col-md-3 footer-icon-div">
                    <a className="footer-icon" href="https://t.me/alielbekov" target="_blank" rel="noopener noreferrer">
                    Telegram <i className="fab fa-light fa-telegram fa-lg footer-icon"></i></a>
                </div>
                <div className="col-lg-auto col-md-3 footer-icon-div">
                <a className="footer-icon" href="https://github.com/Eldorbek2001/" target="_blank" rel="noopener noreferrer">
                    Github <i className="fab fa-light fa-github fa-lg footer-icon"></i></a>
                </div>
                <div className="col-lg-auto col-md-3 footer-icon-div">
                    <a className="footer-icon" href="mailto:eldorbek2001@arizona.edu" target="_blank" rel="noopener noreferrer">
                    Email <i className="fas fa-light fa-envelope fa-lg footer-icon"></i></a>
                </div>
            </div>
            </div>
        </footer>
</div>
)
}

export default Footer