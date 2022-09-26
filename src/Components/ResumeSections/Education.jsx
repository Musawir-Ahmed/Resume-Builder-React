import React, { useState } from 'react'
import InputBox from '../Form/inputBox';
import '../../Css/resumesections.css'
import SectionHeading from './SectionHeading/SectionHeading'

export default function Education(props) {

    const [educationBodyId, seteducationBodyId] = useState(0);
    const addeducationBody = () => {
        props.seteducationBody(props.educationBody.concat([{ id: educationBodyId, degreename: "", institute: "", startdate: "", enddate: "", grade: "", description: "", }]));
        seteducationBodyId(educationBodyId + 1);
    };
    const removeeducationBody = (id) => {
        var filtered = props.educationBody.filter(function (value) {
            return value.id !== id;
        });
        props.seteducationBody(filtered);
    }

    return (
        <span>
            <br />
            <div className="row justify-content-center">
                <SectionHeading sectionname={"education"} setheadings={props.setheadings} headings={props.headings} title={props.headings["education"]} />
            </div>


            {
                props.educationBody.map((element) => {
                    return (
                        <span key={"Education" + element.id}>
                            <br />
                            <div className="container justify-content-center" id='formContainer'>
                            <div className="row">
                                    <div className="col-md-12">
                                    <button onClick={() => { removeeducationBody(element.id) }} className='btn deleteBodyButton'>{/*Remove Button*/}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                    </div>
                                </div>
                                
                                <span >


                                    <div className="row justify-content-center">
                                        <div className="col-md-5">
                                            <InputBox onChange={(event) => props.UpdateObjectValue("education", "degreename", element.id, event.target.value)} value={props.getObjectValue("education", "degreename", element.id)} id={"degreename" + element.id} label="Education" placeholder="Enter degree name" />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <InputBox onChange={(event) => props.UpdateObjectValue("education", "institute", element.id, event.target.value)} value={props.getObjectValue("education", "institute", element.id)} id={"institute" + element.id} label="Institute" placeholder="Enter your institute name" />
                                        </div>
                                        <div className="col-md-1">

                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-5">
                                            <InputBox maxLength="10" onChange={(event) => props.UpdateObjectValue("education", "startdate", element.id, event.target.value)} value={props.getObjectValue("education", "startdate", element.id)} type="text" id={"degreename" + element.id} label="Start date" placeholder="dd/mm/yy" />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <InputBox maxLength="10" onChange={(event) => props.UpdateObjectValue("education", "enddate", element.id, event.target.value)} value={props.getObjectValue("education", "enddate", element.id)} type="text" id={"enddate" + element.id} label="End date" placeholder="dd/mm/yy" />
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-5">
                                            <InputBox onChange={(event) => props.UpdateObjectValue("education", "grade", element.id, event.target.value)} value={props.getObjectValue("education", "grade", element.id)} id={"grade" + element.id} label="Grade" placeholder="Enter grade , percentage etc." />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <div className="row" >
                                                <label>Courses</label>
                                                <br />
                                                <textarea onChange={(event) => props.UpdateObjectValue("education", "description", element.id, event.target.value)} value={props.getObjectValue("education", "description", element.id)} id={"description" + element.id} label="Description" placeholder="Enter Courses with like pf,oop,dsa" className='form-control' cols="40" rows="10"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
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
                <button onClick={addeducationBody} className='btn addBodyButton'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg> Add Education</button>
            </div>

        </span>
    )
}