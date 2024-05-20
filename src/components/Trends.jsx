import React from 'react'
import tdata from "../components/data/trenddata.js"
import Trendscard from './Trendscard'
import style from '../components/Trends.module.css'

const Trends = () => {
 
  return (
    
    <div >
      
      <h1 className='headingtrends'>What new trends and technology will you discover?</h1>
      <p className='trenddec'>Today's technology is developing quickly, and our new technological trends are enabling and <br></br>advancing, speeding up the pace of development.</p>
      <div className={style.trends}>
      {tdata.map(t=> <Trendscard t={t}/>)}
      </div>
    
  </div>
  )
}

export default Trends