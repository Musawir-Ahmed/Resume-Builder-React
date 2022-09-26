import React, { useState } from 'react'
import InputBox from '../Form/inputBox';
import '../../Css/resumesections.css'
import SectionHeading from './SectionHeading/SectionHeading'

export default function Certificates(props) {

    const [certificateBodyId, setcertificateBodyId] = useState(0);
    const addcertificateBody = () => {
        props.setcertificateBody(props.certificateBody.concat([{ id: certificateBodyId, certificateType: "", startdate: "", enddate: "", description: "", }]));
        setcertificateBodyId(certificateBodyId + 1);
    };
    const removecertificateBody = (id) => {
        var filtered = props.certificateBody.filter(function (value) {
            return value.id !== id;
        });
        props.setcertificateBody(filtered);
    }

    return (
        <span>
            <br />
            <div className="row justify-content-center">
                <SectionHeading sectionname={"certificate"} setheadings={props.setheadings} headings={props.headings} title={props.headings["certificate"]} />
            </div>

            {
                props.certificateBody.map((element) => {
                    return (
                        <span key={"certificate" + element.id}>
                            <br />
                            <div className="container justify-content-center" id='formContainer'>
                                <div className="row">
                                    <div className="col-md-12">
                                    <button onClick={() => { removecertificateBody(element.id) }} className='btn deleteBodyButton'>{/*Remove Button*/}
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
                                            <InputBox maxLength="32" onChange={(event) => props.UpdateObjectValue("certificate", "certificateType", element.id, event.target.value)} value={props.getObjectValue("certificate", "certificateType", element.id)} id={"certificateName" + element.id} label="Certificate Type" placeholder="Enter Certificate type" />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <InputBox maxLength="10" onChange={(event) => props.UpdateObjectValue("certificate", "startdate", element.id, event.target.value)} value={props.getObjectValue("certificate", "startdate", element.id)} id={"startDate" + element.id} label="Start Date" placeholder="dd/mm/yy" />
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-5">
                                            <InputBox maxLength="10" onChange={(event) => props.UpdateObjectValue("certificate", "enddate", element.id, event.target.value)} value={props.getObjectValue("certificate", "enddate", element.id)} id={"endDate" + element.id} label="End Date" placeholder="dd/mm/yy" />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-5">
                                            <div className="row" >
                                                <label>Description</label>
                                                <br />
                                                <textarea onChange={(event) => props.UpdateObjectValue("certificate", "description", element.id, event.target.value)} value={props.getObjectValue("certificate", "description", element.id)} id={"description" + element.id} label="Description" placeholder="Enter description" className='form-control'  cols="40" rows="10"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </span>
                            </div></span>

                    )
                }
                )
            }


            <br />
            <br />
            <div id="addBodyButtonBox" className="container">
            <button onClick={addcertificateBody} className='btn addBodyButton'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg> Add Certificate</button>
            </div>
        </span>
    )
}