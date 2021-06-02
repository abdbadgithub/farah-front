import React, { useState } from "react"
import axios from 'axios'


function SkillPanelItem(props) {
    const [hide,sethide] = useState(0)
    const [skillname, setskillname] = useState(props.name);
    const [file, setFile] = useState();
    const send = (event) => {
        event.preventDefault(); 

        const itemId = event.target.id;
        const data = new FormData();
        data.append("skillname", skillname);
        data.append("file", file);
        axios
            .post(`http://localhost:8080/skill/update/${itemId}`, data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
            alert('skill has been updated')
    };
    const remove = (e) =>{
        
        const id = e.target.id;
        axios
        .post(`http://localhost:8080/skill/delete/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        alert('skill has been deleted');
        sethide(1)

    }

    return (
        <>
        { (hide == 0) ? 
            <tr>
            <td><input
                type="text"
                id="skillname"
                onChange={e => setskillname(e.target.value)}
                name='skillname'
                value={skillname}
            />
            </td>
            <td><input
                type="file"
                id="file"
                accept=".jpg"
                onChange={(event) => {
                    const file = event.target.files[0];
                    setFile(file);
                }}
                style={{height:'38px'}}
            />
            </td>
            <td><input type="submit" onClick={send} className="btn skillupdatebtn" name='itemId' value='UPDATE' id={props.skillId} /></td>
            <td><input type="button" onClick={remove} className="btn skilldeletebtn" value='DELETE' id={props.skillId}/></td>
        </tr>
         : ''}
        </>
        
    )
}

export default SkillPanelItem