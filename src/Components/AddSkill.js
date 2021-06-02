import React,{useState} from "react"
import axios from 'axios'
import './styles/AddSkill.css'
function AddSkill() {
    const [skillname,setskillname] = useState()
    
    const [file, setFile] = useState();
    const send = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('skillname',skillname)
        data.append("file", file);
        console.log(data);
        
        axios
            .post(`http://localhost:8080/skill/add/1`, data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
            alert('skill Has been added')
    };

    return (
        <div className="container ">
            <form onSubmit={send}>
            <div className="skillgrid-container">
            <div className="skillgrid-1">
                <p style={{ fontSize: '20px' }} > Skill Name</p>
            </div>
            <div className="skillgrid-2">
                <input type="text " id='skillname' onChange={e => setskillname(e.target.value)} name="skillname" value={skillname} style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '40px' }} />
            </div>

            <div className="skillgrid-3">
                <p style={{ fontSize: '20px' }} >Skill Icon</p>
            </div>

            <div className="skillgrid-4">
                <input type="file" type="file"
                id="file"
                onChange={(event) => {
                    const file = event.target.files[0];
                    setFile(file);
                }} name="last" style={{ color: 'black', border: '1px solid #ff1cd2', width: '400px', height: '37px' }} />
            </div>
            <div className="skillgrid-5">
                <input type="submit" className='btn' />
            </div>
            </div>
            </form>
        </div>
    )
}

export default AddSkill