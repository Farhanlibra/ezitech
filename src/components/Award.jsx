import React from 'react'
import style from '../components/Award.module.css'

const Award = () => {
  return (
    <div className={style.awardcont}>
       <h1 className={style.heading}>Best IT Services Award 2023</h1>
        <div className="containeraward">
      
        <img src='../images/pa.png' className={style.awardimage} alt="Bootstrap Themes" width="300" height="400" loading="lazy"/>
      
      
        <div>
        <p className={style.awarddes}><b>Ezitech Is affiliated With</b> <span style={{color:"blue"}}>Eziline Software House</span>. Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field of IT and serves as a major milestone in its journey towards success.</p><p className={style.awarddes}>

This award is a huge source of motivation and inspiration for the entire team at Eziline Software House. <b>It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction.</b> The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.</p><p className={style.awarddes}>

<b>Ismail Shah, the CEO of Eziline Software House Pvt Ltd</b>, received the Best Services Award in the IT sector from the <b>President of Pakistan, Dr. Arif Alvi</b>, in recognition of his remarkable contributions to the country’s technology industry.</p>
<button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Eziline Profile</button>

</div>   
          
        </div>
      </div>
   
  )
}

export default Award