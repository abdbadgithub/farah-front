import React, { useState,useEffect } from "react"
import SkillsPanelItem from '../Components/SkillsPanelItem'
import axios from 'axios'
import './styles/SkillsPanel.css'
function SkillsPanel() {
    const [skilldata, setskilldata] = useState([]);
    const request = async () => {
        await axios
            .get("http://localhost:8080/skill/getskills")
            .then((response) => {
                setskilldata(response.data.result);
            });
            
    };

    useEffect(() => {
            request();
    }, []);
    const SkillsPanelitems = skilldata.map( skill =>
      <SkillsPanelItem
        key={skill.skill_id}
        img={skill.skill_icon}
        name={skill.skill_name}
        id={skill.user_id}
        skillId={skill.skill_id}
      />
    );
    return (
        <div className="container">
            <form>
                <div style={{ overflow: 'scroll', height: '500px' }}>
                    <table>
                        <thead >
                            <tr id='skillsheaders'>
                                <th>Skill Name</th>
                                <th>Skill Icon</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody >
                           
                                {SkillsPanelitems}
                            
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    )
}

export default SkillsPanel