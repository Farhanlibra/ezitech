import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="containerft">
          <img src=''></img>
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <h1 className='fha'>About</h1>
      <p className="text-body-secondary abouttext">Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Pages</h5>
      <ul className="nav flex-column pages">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact us</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Internships</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">CodeLab</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shop</a></li>
        
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Contact</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">+923455555396</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">nfo@ezitech.org</a></li>
        
      </ul>
    </div>
    <p>Copyright © 2024 Ezitech Institute | Design & Develop by Ahmed Farhan
</p>
  </footer>
</div>
    </div>
  )
}

export default Footer