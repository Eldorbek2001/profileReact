function FooterIcon(name, link){
    
return(
<div className="col-lg-auto col-md-3 footer-icon-div">
    <a className="footer-icon" href="https://www.instagram.com/aliyelbekov/" target="_blank" rel="noopener noreferrer">
    
    {name}
    {link}
     <i className="fab fa-light fa-instagram fa-lg footer-icon"></i></a>
</div>
)  
}

export default FooterIcon