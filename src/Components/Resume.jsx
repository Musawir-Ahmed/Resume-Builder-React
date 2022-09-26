import React, { useState } from 'react'
import "../Css/resume.css"
import resumeImage from "../Images/welcomeBackground.svg"
import ResumeHeading from "./Welcome/Heading"
import ResumeForm from "./ResumeComponents/ResumeForm"
import ResumePreview from "./ResumeComponents/ResumePreview"
import ResumeSections from './ResumeComponents/ResumeSections'
import * as html2pdf from 'html2pdf.js';


export default function Resume() {

    const [continueButton, setContinueButton] = useState(true);
    const nextContinue = () => {
        setContinueButton(false);
    }


    const [printWindow, setprintWindow] = useState(false);
    const [documentHeight, setdocumentHeight] = useState(null);


    const dwonloadPdf = () => {
        setprintWindow(true)
        var body = document.body,
        html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
        setdocumentHeight({height:height+"px"})
        setTimeout(()=>{
        var element=window.document.getElementById("ResumePrint");          
       html2pdf(element);

        setprintWindow(false);
    },100)
        
    }



    const resumeSection = {
        basicInfo: "Basic Info",
        education: "Education",
        workExp: "Work Experience",
        project: "Projects",
        skill: "Skills",
        certificate: "Certificate",
        intrest: "Intrest",
    };

    const [activeSection, setactiveSection] = useState("basicInfo");

    const [workExpBody, setworkExpBody] = useState([]);

    const [basicInfo, setbasicInfo] = useState([{ id: 1, heading: "", Pname: "", email: "", linkedinlink: "", githublink: "", phone: "", summary: "", title: "" }]);

    const [educationBody, seteducationBody] = useState([]);

    const [projectBody, setprojectBody] = useState([]);

    const [skillBody, setskillBody] = useState([]);


    const [certificateBody, setcertificateBody] = useState([]);

    const [intrestBody, setintrestBody] = useState([]);

    const [headings, setheadings] = useState({ basicInfo: "Basic Info", education: "EDUCATION", workExp: "WORK EXPERIENCE", project: "PERSONEL PROJECTS", skill: "SKILLS", acheivements: "ACHEIVEMENTS", certificate: "CERTIFICATE", intrest: "INTREST", });

    const [profileImageSrc, setprofileImageSrc] = useState("");


    const readURL = file => {
        return new Promise((res, rej) => {
            const reader = new FileReader();
            reader.onload = e => res(e.target.result);
            reader.onerror = e => rej(e);
            reader.readAsDataURL(file);
        });
    };

    const UploadImage = async (event) => {
        const file = event.target.files[0];
        const url = await readURL(file);
        setprofileImageSrc(url)
    }


    return (
        <>
            {
                continueButton === true
                    ?
                    <div className="container-lg">
                        <div className="row justify-content-center">
                            <div className="col-md-5" >
                                <ResumeHeading nextContinue={nextContinue} />
                            </div>
                            <div className="col-md-7">
                                <img alt='ERROR' id='headingImage' src={resumeImage} />
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <div className="row " >
                            {
                                printWindow === false ?
                                    <>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <ResumeSections setactiveSection={setactiveSection} activeSection={activeSection} resumeSection={resumeSection} />
                                            </div>
                                            <div className="row">
                                                <ResumeForm
                                                    UploadImage={UploadImage}
                                                    workExpBody={workExpBody}
                                                    setworkExpBody={setworkExpBody}
                                                    basicInfo={basicInfo}
                                                    setbasicInfo={setbasicInfo}
                                                    educationBody={educationBody}
                                                    seteducationBody={seteducationBody}
                                                    projectBody={projectBody}
                                                    setprojectBody={setprojectBody}
                                                    skillBody={skillBody}
                                                    setskillBody={setskillBody}
                                                    certificateBody={certificateBody}
                                                    setcertificateBody={setcertificateBody}
                                                    intrestBody={intrestBody}
                                                    setintrestBody={setintrestBody}
                                                    headings={headings}
                                                    setheadings={setheadings}
                                                    activeSection={activeSection} resumeSection={resumeSection} />
                                            </div>
                                        </div>
                                        <div className="col-md-6" id='ResumePrintBlock'>
                                            <ResumePreview profileImageSrc={profileImageSrc} intrestBody={intrestBody} certificateBody={certificateBody} projectBody={projectBody} skillBody={skillBody} workExpBody={workExpBody} educationBody={educationBody} headings={headings} basicInfo={basicInfo} printable={false} dwonloadPdf={dwonloadPdf} />
                                        </div>
                                        
                                         </>
                                    :
                                    <>
                                                                     <div className="row">
                                    <div className="col-md-12" >
                                    <ResumePreview printstyle={true} documentHeight={documentHeight} profileImageSrc={profileImageSrc} intrestBody={intrestBody} certificateBody={certificateBody} projectBody={projectBody} skillBody={skillBody} workExpBody={workExpBody} educationBody={educationBody} headings={headings} basicInfo={basicInfo} printable={true} dwonloadPdf={dwonloadPdf} />
                                    </div>
                                    </div>
                                                            <div className="row">
                                                            <div id='footer'>Foot</div>
                                                        </div>
                                    </>

                                                                 
                            }
                        </div>

                    </>
            }
        </>
    )
}
