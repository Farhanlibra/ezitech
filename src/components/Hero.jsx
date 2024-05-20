import React from 'react'
import style from '../components/Hero.module.css'

const Hero = () => {
  return (
    
        
      <div className={style.imagecontainer}>
      
        <img src='../images/h.jpg'  alt="Bootstrap Themes" width="100%"  height="500px" loading="lazy"/>
       
      
      <div className={style.centered}><h1 style={{color:"black", fontWeight:"bolder"}}>Learn The Fundamental With Our Experts in Programming</h1><p style={{color:"blue", fontWeight:"bolder"}}>Utiilze Effective Training to Reach your Potential</p></div>

      
      <form className={style.centeredform} role="search">
        <input className="form-control me-2 searchinp" type="search" placeholder="Search" aria-label="Search"/>
       
      </form>
      <div className={style.centered}>
      <p style={{color:"blue", marginTop: "400px", marginLeft:"30px", fontSize:"20px", fontWeight:"bolder"}}>Explore Our More Usefull Products</p>
      <a className={style.imagelink}href='#'>EZIBLOG</a>
      <a className={style.imagelink}href='#'>EZICODING</a>
      <a className={style.imagelink}href='#'>EZIPOS</a>
      </div>
      </div>
      
      
    
    
  )
}

export default Hero