import React from "react"

function SkillItem(props) {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={`http://localhost:8080/images/${props.img}`} alt="Avatar" style={{ width: '90%', height: '90%' }} />
      </div>
      <div className="flip-card-back" >
        <h1 style={{marginTop:'25px',fontSize:"20px"}}>{props.name}</h1>
      </div>
    </div>
  </div>
  )
}
export default SkillItem