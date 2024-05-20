import React from 'react'
import style from '../components/Works.module.css'

import WorkCard from './WorkCard'
import work from "./data/work.js"

const Works = () => {
  
  return (
<>
<h1 style={{textAlign:'center', margin:"40px", marginTop:"20px"}}>How it works?</h1>
    <div className={style.workcard}>
      
   {work.map(w=> <WorkCard w={w}/>)} 
   </div>
</>
   
  )}





export default Works