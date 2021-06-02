import React,{useState,useEffect} from "react";
import "./styles/Skills.css";
import girl from "../images/girl.png";
import SkillItem from "./SkillItem";
import axios from 'axios'


function Skills() {

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

    const skills = skilldata.map( skill =>
      <SkillItem
        key={skill.skill_id}
        img={skill.skill_icon}
        name={skill.skill_name}
        id={skill.user_id}
      />
    );
  return (
    <div className="skills-section">
      <div className="container grid-container-skills" id="skills">
        <div className="sgrid-1 skill-img">
          <img src={girl} alt="girl coder" width="480px" height="480" />
        </div>
        <div className="sgrid-2">
        {skills}
        </div>
      </div>

    </div>
  );
}

export default Skills;
