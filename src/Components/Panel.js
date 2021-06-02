import React, { useState } from "react"
import './styles/Panel.css'
import {Link} from 'react-router-dom'

function Panel() {
    const [blbtn,setblbtn] = useState()
    const [sklbtn,setsklbtn] = useState()

    const displaynewblogbtn = () =>{
        setblbtn(1)
        setsklbtn(0)
    }
    const displaynewskillbtn = () =>{
        setblbtn(0)
        setsklbtn(1)  
    }
    const setZero = () =>{
        setblbtn(0)
        setsklbtn(0)
    }
    return (
        <>
            <div className="container" style={{ marginTop: '100px' }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" style={{ marginBottom: '50px' }}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <Link className="nav-link text-dark a1" onClick={setZero} to="/Panel/AboutPanel">Profile <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark a1" onClick={displaynewskillbtn} to="/Panel/SkillsPanel">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark a1" onClick={displaynewblogbtn} to="/Panel/BlogPanel">Blog Posts</Link>
                            </li>
                            
                            
                            
                            { (sklbtn==1) ? <li className="nav-item">
                                <Link className="nav-link text-dark a1 addskill" to="/Panel/AddSkill">Add skill</Link>
                            </li> : '' }
                            
                            { (blbtn==1) ?
                            <li className="nav-item">
                                <Link className="nav-link text-dark a1 addblog" to="/Panel/AddBlog">Add Blog</Link>
                            </li> : ''}
                        </ul>
                    </div>
                </nav>
                    
                </div>
        </>
    )
}
export default Panel