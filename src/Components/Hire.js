import React from "react"
import './styles/Hire.css'
function Hire() {
  return (
    
        <div className="container p-3  border " id="container" align="center"
            style={{
                backgroundImage:'url("https://wallpaperaccess.com/full/2484218.jpg")',
                maxWidth:'100%',
                maxHeight:'100%',
                height:'400px',
                backgroundRepeat:'no-repeat',
                backgroundSize:'100% 400px',
                marginBottom:'150px'
                
                }}>

                    <section   
                    style={{
                        fontFamily: "poppins",
                        color:"white",
                        marginTop:'100px'
                    }}>
                        <h3>Have any project in Mind?</h3>
                        <h1>I'm Available for Freelancing</h1>
                    </section>
                    <div>
                    
                        <input type="button" value="Hire Me!" id="btn"
                        style={{
                            backgroundColor:"#FF1CD2",
                            width:"10%",
                            color:"white",
                            height:"40px",
                            border: "none",
                            boxShadow:'5px 10px #888888',
                            borderRadius:"10px",
                            marginTop:"30px",
                            fontSize:"80%",
                            
                        }} 
                        />
                    </div>
        </div>
    
  )
}

export default Hire