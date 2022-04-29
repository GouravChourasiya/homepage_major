import React from "react";
import App from "../App";
import "../Editor/asset/css/style.css";
import Concept from  "../Editor/asset/img/3099563.jpg";
import Insta from "../Editor/asset/img/instagram.png"
import Fb from "./../Editor/asset/img/facebook.png"
import Yt from "./../Editor/asset/img/youtube.png"

import {useLocation,Link} from "react-router-dom";


const homepage=()=>{

    /* const navigate=useLocation();
     const Editor=()=>{
          navigate("/editor");
     }*/
     return (
      <>
      
     <div className="homepage_body">
      <div className="homepage_container">
        <div className="homepage_nav">
        <li className="homepage_list"><Link to="/dash" className="homepage_a" id="homepage_first_btn">LOGIN</Link></li>
        <li className="homepage_list"><Link to="/editor"   className="homepage_a" id ="sec">SIGNIN</Link></li>

      </div>
      <div className="homepage_second_container">
        <li className="homepage_list"><h2 className="homepage_h2">FOR DEVELOPER</h2></li>
        <li className="homepage_list"><h2 className="homepage_h2">FOR COMPANIES</h2></li>
        <div className="homepage_medium_buttons">

        <Link to="/editor"  className="homepage_a">SIGNUP</Link>
        <Link to="/editor"  className="homepage_a">HIRING</Link>
      </div>

      </div>
     <img className ="homepage_img" src={Concept}/>
       
       </div>
       <div className="homepage_main_body">
        <h4 className="homepage_h4">LOGO</h4>
        <h2 className="homepage_h2">MATCH EXPECTATION <br/>WITH THE COMPANIES</h2>
        <h1 className="homepage_h1">learn programming languages  <br/>and do coding  to elevate logical skills</h1>
        <div className="homepage_Link"> <Link to="/dash" className="homepage_a" >LOGIN & CODE</Link></div>
        <ul className="homepage_ul">
        <li className="homepage_list"> <img className="homepage_img"src={Insta}/></li>
        <li className="homepage_list"> <img className="homepage_img" src={Fb}/></li>
        <li className="homepage_list" > <img  className="homepage_img"src={Yt}/> </li>
      </ul>

      </div>
      </div>

    

      
   </>
   );

}
export default homepage;