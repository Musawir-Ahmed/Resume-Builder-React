import React, { useState } from 'react'
import InputBox from '../Form/inputBox';
import '../../Css/resumesections.css'
import SectionHeading from './SectionHeading/SectionHeading'

export default function Project(props) {

    const [projectBodyId, setprojectBodyId] = useState(0);
    const addprojectBody = () => {
        props.setprojectBody(props.projectBody.concat([{ id: projectBodyId, projectname: "", startdate: "", enddate: "", description: "", }]));
        setprojectBodyId(projectBodyId + 1);
    };
    const removeprojectBody = (id) => {
        var filtered = props.projectBody.filter(function (value) {
            return value.id !== id;
        });
        props.setprojectBody(filtered);
    }

    return (
        <span>
            <br />
            <div className="row justify-content-center">
                <SectionHeading sectionname={"project"} setheadings={props.setheadings} headings={props.headings} title={props.headings["project"]} />
            </div>
            <br />

            {
                props.projectBody.map((element) => {
                    return (
                        <span key={"Project" + element.id}>
                            <div className="container justify-content-center" id='formContainer'>

                                <span >
                                    <div className="row justify-content-center">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button onClick={() => { removeprojectBody(element.id) }} className='btn deleteBodyButton'>{/*Remove Button*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <InputBox onChange={(event) => props.UpdateObjectValue("project", "projectname", element.id, event.target.value)} value={props.getObjectValue("project", "projectname", element.id)} id={"projectName" + element.id} label="Project Name" placeholder="Enter project name" />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <InputBox maxLength="10" type="text" onChange={(event) => props.UpdateObjectValue("project", "startdate", element.id, event.target.value)} value={props.getObjectValue("project", "startdate", element.id)} id={"startdate" + element.id} label="Start date" placeholder="dd/mm/yy" />
                                        </div>
                                        <div className="col-md-1">           </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-5">
                                            <InputBox maxLength="10" type="text" onChange={(event) => props.UpdateObjectValue("project", "enddate", element.id, event.target.value)} value={props.getObjectValue("project", "enddate", element.id)} id={"enddate" + element.id} label="End date" placeholder="dd/mm/yy" />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <div className="row" >
                                                <label>Description</label>
                                                <br />
                                                <textarea onChange={(event) => props.UpdateObjectValue("project", "description", element.id, event.target.value)} value={props.getObjectValue("project", "description", element.id)} id={"description" + element.id} label="Description" placeholder="Enter project description" className='form-control' cols="40" rows="10"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </span>
                            </div>
                            <br />
                            <br />
                        </span>
                    )
                }
                )
            }

            <br />
            <br />
            <div id="addBodyButtonBox" className="container">
                <button onClick={addprojectBody} className='btn addBodyButton'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg> Add Project</button>
            </div>
        </span>
    )
}