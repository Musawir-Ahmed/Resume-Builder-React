import React, { useState } from 'react'
import InputBox from '../Form/inputBox';
import '../../Css/resumesections.css'
import SectionHeading from './SectionHeading/SectionHeading'

export default function Skill(props) {
    const [skillBodyId, setskillBodyId] = useState(0);
    const addskillBody = () => {
        props.setskillBody(props.skillBody.concat([{ id: skillBodyId, skillname: "", rate: "" }]));
        setskillBodyId(skillBodyId + 1);
    };
    const removeskillBody = (id) => {
        var filtered = props.skillBody.filter(function (value) {
            return value.id !== id;
        });
        props.setskillBody(filtered);
    }

    return (
        <span>
            <br />
            <div className="row justify-content-center">
                <SectionHeading sectionname={"skill"} setheadings={props.setheadings} headings={props.headings} title={props.headings["skill"]} />
            </div>
            {
                props.skillBody.map((element) => {
                    return (
                        <span key={"skill" + element.id}>
                            <br />
                            <div className="container justify-content-center" id='formContainer'>
                                <span >
                                    <div className="row justify-content-center">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button onClick={() => { removeskillBody(element.id) }} className='btn deleteBodyButton'>{/*Remove Button*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <InputBox maxLength="18" onChange={(event) => props.UpdateObjectValue("skill", "skillname", element.id, event.target.value)} value={props.getObjectValue("skill", "skillname", element.id)} id={"skillname" + element.id} label="Skill" placeholder="Enter skill name" />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <InputBox type="text" onChange={(event) => (event.target.value > 0 && event.target.value <= 5) || (event.target.value === "") ? props.UpdateObjectValue("skill", "rate", element.id, event.target.value) : null} value={props.getObjectValue("skill", "rate", element.id)} id={"rate" + element.id} label="Rate" placeholder="Enter rate level from 0 - 5" />
                                        </div>
                                        <div className="col-md-1">            </div>
                                    </div>
                                </span>
                            </div>
                        </span>
                    )
                }
                )
            }

            <br />
            <br />
            <div id="addBodyButtonBox" className="container">
                <button onClick={addskillBody} className='btn addBodyButton'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg> Add Skill</button>
            </div>
        </span>
    )
}
