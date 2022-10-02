import React from "react";
import ReactDOM from "react-dom";
import FooterElement from "./FooterElement";

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
                <FooterElement name = "Instagram" link = "https://www.instagram.com/aliyelbekov/" icon = "instagram" />
                <FooterElement name = "Telegram" link = "https://t.me/alielbekov" icon = "telegram" />
                <FooterElement name = "GitHub" link = "https://github.com/Eldorbek2001/" icon = "github" />
                <FooterElement name = "Facebook" link = "https://www.facebook.com/eldorbek.elbekov.52" icon = "facebook" />
                <FooterElement name = "Email" link = "mailto:eldorbek2001@arizona.edu" icon = "envelop" />
            </div>
            </div>
        </footer>
</div>
)
}

export default Footer