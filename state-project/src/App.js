import { useState } from "react";
import Chip from "./Chip";
import Input from "./Input";
import "./style.css";
import 'material-icons/iconfont/material-icons.css';

/**
 * Show an input for taking skills from the user
 * added skills needs to be shown to the user down below the input 
 * every added skill can also be deleted by the user.
 * 
 * Array = [{id, skill}]
 * 
 * states :
 * inputValue 
 * skills 
 */

export default function App() {
    console.log("parent render");
    const [skills, setSkills] = useState([]);

    const addSkill = (newSkill) => {
        setSkills([...skills, newSkill]);
    }

    const deleteSkill = (skillTobeDeleted) => {
        const remainingSkills = skills.filter((skill) => skill !== skillTobeDeleted);
        setSkills(remainingSkills);
    }
    let count = 0;
    return (
        <div>
            <Input addSkill={addSkill} />
            <div className="skills-container">
                {
                    skills.map(skill => <Chip deleteSkill={deleteSkill} skill={skill} />)
                }
            </div>
        </div>
    );
}
