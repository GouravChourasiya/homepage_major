import React from 'react'
import "../Editor/asset/css/maindashboard.css"
import {Link} from "react-router-dom";
function maindashboard() {
  return (
    <div className='maindashboard_body'>
    <div className='maindashboard_nav'>
        <ul className='maindashboard_ul'>
          <li  className='maindashboard_li' id='Logo'>CODERAGE</li>
          <li className='maindashboard_li'>Prepare</li>
          <li className='maindashboard_li'>Profile </li>
          <li className='maindashboard_li'>Compete</li>
        </ul>
    </div>
    <div className='maindashboard_main'>
    <ul className='maindashboard_ul'>
      <li className='maindashboard_li'><div className='maindashboard_Container'><h2 className='maindashboard_h2'>C</h2><Link to="/"><button  className='maindashboard_main_btn'>Prepare C</button></Link></div></li>
      <li className='maindashboard_li'><div className='maindashboard_Container'><h2 className='maindashboard_h2'>C++</h2><Link to="/"><button to="/" className='maindashboard_main_btn'>Prepare C++</button></Link> </div></li>
      <li className='maindashboard_li'><div className='maindashboard_Container'><h2 className='maindashboard_h2'>Java</h2><Link to="/"><button to="/" className='maindashboard_main_btn'>Prepare Java</button></Link></div></li>
      <li className='maindashboard_li'><div className='maindashboard_Container'><h2 className='maindashboard_h2'>Python</h2><Link to="/"><button to="/" className='maindashboard_main_btn'>Prepare Python</button></Link></div></li>
    </ul>
    </div>
    
    </div>
  
  )
}

export default maindashboard