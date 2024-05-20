import React from 'react'
import tdata from "../components/data/trenddata.js"
import CoursesCd from '../components/CoursesCd.jsx'
import style from '../components/Courses.module.css'

const Courses = () => {
 
  return (
    
    <div >
      
      <h1 className='headingtrends'>Recommended Course's</h1>
      
      <div className={style.trends}>
      {tdata.map(t=> <CoursesCd t={t}/>)}
      </div>
    
  </div>
  )
}

export default Courses