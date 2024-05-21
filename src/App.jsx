

import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Award from './components/Award'
import Works from './components/Works'
import Trends from './components/Trends'
import Courses from './components/Courses'
import Internship from './components/Internship'
import Learning from './components/Learning'
import '../src/App.css'
import WorkCard from './components/WorkCard'

function App() {
  

  return (
    <>
      <div style={{width:100%}}>
      <Header/>
      <Hero/>
      </div>
      <Award/>
      <div className='works'><Works/></div>
      <div className='trends'><Trends/></div>
    
      <Courses/>
      <h1 className='ih'>Perfect Internship's For You</h1>
      <div style={{width:100%}}><Internship/></div>
      
      <div style={{width:100%}}>
      <Footer/>
      </div>
      
       
    </>
  )
}

export default App
