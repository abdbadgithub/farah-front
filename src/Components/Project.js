import React from "react"
import './styles/Project.css'
function Project() {
  return (
    <div className='cotainer-projects' 
            style={{
                width:'100%',
                height:'300px',
                backgroundColor:'black',
                margin:'auto',
                marginBottom:'150px'
            
            }}>
        <section className="clients-box w3-animate-bottom">
            <header>5+</header>
            <p style={{fontSize:'20px'}}>Clients</p >
        </section>

        <section className="clients-box w3-animate-bottom">
            <header>6+</header>
            <p style={{fontSize:'20px'}}>Projects</p >
        </section>

        <section className="clients-box w3-animate-bottom">
            <header>0</header>
            <p style={{fontSize:'20px' }}>Awards</p >
        </section>

        <section className="clients-box w3-animate-bottom">
            <header>02</header>
            <p style={{fontSize:'15px',marginBottom:'-20px'}}>Years </p >
            <span style={{fontSize:'15px'}}>Experience</span >
        </section>
    </div>
  )
}

export default Project