import React from 'react'
import { PhoneOutlined,BehanceSquareFilled, LinkedinFilled, FacebookFilled,YoutubeFilled } from '@ant-design/icons';
import { MdEditLocation } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";


import style from '../components/Header.module.css'


const Header = () => {
  return (
    
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"blue"}}>
  <div className={style.nav}>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      
        <li className="nav-item">
        
          <p className={style.linkb} aria-current="page" href="#"><span style={{marginRight:"3px", marginLeft:"80px"}}><PhoneOutlined /></span>03455555396</p>
        </li>
        <li className="nav-item">
          <p className={style.linkb} href="#"><span><MdEditLocation /></span>office # 304-B, Amna Plaza, Rawalpindi, Pakistan</p>
        </li>
        <li className="nav-item">
          <p className={style.linkb} href="#"><span><MdAccessTime /></span>
 Mon - Fri 8.00 - 20.0</p>
        </li>
       
        <li className="nav-item">
          <a className={style.linkb} href="#"><span style={{margin:"0px"}}><BehanceSquareFilled /></span>
 </a>
        </li><li className="nav-item">
          <a className={style.linkb} href="#"><span style={{margin:"0px"}}><LinkedinFilled /></span>
 </a>
        </li>
        <li className="nav-item">
          <a className={style.linkb} href="#"><span style={{margin:"0px"}}><FacebookFilled /></span>
 </a>
        </li>
        <li className="nav-item">
          <a className={style.linkb} href="#"><span style={{margin:"0px"}}><YoutubeFilled /></span>
 </a>
        </li>
        
        
        <li className="nav-item">
          <a className={style.linkb} href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className={style.linkb} href="#">Register</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header