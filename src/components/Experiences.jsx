import React from "react";
import { ReactDOM } from "react";
import experiences from "../localData/experiences";

function Experiences(){
    return(
        <div className="experience-box">
        <h2 style={{color:"white"}}>My most recent experience:</h2>
        {experiences.map(x=>{
            return(
                    <div className="experience-item">
                    <h4>{x.position}, <br />{x.department}, <br /> {x.company}</h4>
                    <div style={{textAlign:"right"}}>{x.from}-{x.to}</div>
                    </div>
                 )
        }
        )}
    </div>
    )
}


export default Experiences;