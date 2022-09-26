import React from 'react'
import "../../Css/template_1.css"
export default function ResumePreview(props) {


  function AppenedStars(Nostars) {
    let star = (<>       &nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" className="bi bi-circle-fill" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="10" />
      </svg></>);
    let array = [];
    for (let index = 0; index < Nostars; index++) {
      array.push(star);
    }
    return array;
  }



  return (
    <>

      <div className='container'>

        {props.printable === false ?
          <>
            <br />
            <div id='previewHeading'>
              <h4>PREVIEW</h4>
              <button onClick={props.dwonloadPdf} id='dwonloadButton' className='btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-download" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </button>
            </div>
            <br />
          </>
          :
          <></>
        }
        <div style={props.documentHeight}  id='ResumePrint'>
          <div id='upperInfoRow'>
            {props.profileImageSrc != "" ? <img id='proficleImage' src={props.profileImageSrc} className="rounded-circle z-depth-2"  ></img> : null}
            <div id='NameTitle'>
              <h3>{props.basicInfo[0]["Pname"]}</h3>
              <h6>{props.basicInfo[0]["title"]}</h6>
            </div>
            <div id={props.printstyle==true?"summary2":"summary"}>
              <p>
                {props.basicInfo[0]["summary"]}
              </p>
            </div>
            <div id='contactInfo'>
              {
                props.basicInfo[0]["email"] !== "" ? <div>
                  <a href={props.basicInfo[0]["email"]}   >{props.basicInfo[0]["email"]}   </a>         &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </div> : null
              }
              <br />
              {
                props.basicInfo[0]["phone"] !== "" ?
                  <div>
                    {props.basicInfo[0]["phone"]}
                    &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-phone" viewBox="0 0 16 16">
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </div> : null
              }
              <br />
              {props.basicInfo[0]["githublink"] !== "" ?
                <div>
                  <a href={props.basicInfo[0]["githublink"]}
                  >              {props.basicInfo[0]["githublink"]}
                  </a>
                  &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div> : null
              }
              <br />
              {props.basicInfo[0]["linkedinlink"] !== "" ?
                <div>
                  <a href={props.basicInfo[0]["linkedinlink"]}>{props.basicInfo[0]["linkedinlink"]}</a>
                  &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </div> : null
              }
              <br />
            </div>
          </div>
          <div id={props.printstyle==true?"PrintBody":"resumeBody"}>
            <div id="education" >
              {
                props.educationBody.length > 0 ?
                  <>
                    <h5 id="educationBorder">{props.headings["education"]}</h5>
                    {
                      props.educationBody.map((element) => {
                        return (
                          <span key={element.id} id='educationContainer' >
                            <div id='degreename'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" className="bi bi-circle-fill" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="10" />
                            </svg> &nbsp;{element.degreename}</div>
                            <div className='institutename'>{element.institute}</div>
                            <p id='date'>{element.startdate}-{element.enddate}<span id='grade'>{element.grade}</span></p>
                            {
                              element.description !== "" ?
                                <p id='courses' className='testing'>Courses
                                  <span id='coursesContent'>
                                    <ul>
                                      {element.description.split(",").map((childElement) => { return (<li key={Math.random()} >{childElement}</li>) })}
                                    </ul>
                                  </span>
                                </p>
                                : <></>
                            }
                          </span>
                        )
                      })
                    }
                  </>
                  : <></>
              }

              <div id="workExperience" >
                {
                  props.workExpBody.length > 0 ?
                    <>
                      <h5 id="workExperienceBorder">{props.headings["workExp"]}</h5>
                      {
                        props.workExpBody.map((element) => {
                          return (
                            <span key={Math.random()} id='workExperienceContainer' >
                              <div id='positionTitle'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="black" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="10" />
                              </svg>  &nbsp;{element.position}</div>
                              <div className='companyName'>{element.companyname}</div>
                              <p className='interval' id='date'>{element.startdate}-{element.enddate}</p>
                              <p id='companydescription'>{element.description}</p>
                              {
                                element.acheivementTask != "" ?
                                  <p id='acheivement' className='testing'>Acheivement/Taks
                                    <span id='acheivementContent'>
                                      <ul>
                                        {
                                          element.acheivementTask.split(",").map((children) => { return (<li key={Math.random()}>{children}</li>) })
                                        }
                                      </ul>
                                    </span>
                                  </p>
                                  : null
                              }
                            </span>
                          )
                        })
                      }
                    </> : null
                }
              </div>

            </div>
            <div id='secondhalf'>
              <div id="skill">
                {props.skillBody.length > 0
                  ?
                  <>
                    <h5 id='skillBorder'>{props.headings["skill"]}</h5>
                    {props.skillBody.map((element) => {
                      return (
                        <>
                          <div key={Math.random()}>{element.skillname}
                            {AppenedStars(element.rate)}
                          </div>
                        </>
                      )
                    })}
                    <br />
                  </>
                  :
                  null
                }
              </div>
              <div id="skill">
                {
                  props.projectBody.length > 0 ?
                    <>
                      <h5 id='skillBorder'>{props.headings["project"]}</h5>
                      {
                        props.projectBody.map((element) => {
                          return (
                            <span key={Math.random()}>
                              <p id='projectNameDate'>
                                {element.projectname} &nbsp;
                                {"(" + element.startdate} - {element.enddate + ")"}
                              </p>
                              <p id='projectDescription'>
                                {
                                  element.description !== ""
                                    ?
                                    <ul>
                                      {
                                        element.description.split(",").map((child) => { return (<li key={Math.random()}>{child}</li>) })
                                      }
                                    </ul>
                                    :
                                    null
                                }
                              </p>
                            </span>
                          )
                        })
                      }
                    </>
                    : null
                }
              </div>

              <div id="skill">
                {
                  props.certificateBody.length > 0 ?
                    <>
                      <h5 id='skillBorder'>{props.headings["certificate"]}</h5>
                      {
                        props.certificateBody.map((element) => {
                          return (
                            <span key={Math.random()}>
                              <p id='certificateNameDate'>
                                {element.certificateType} &nbsp;
                                {"(" + element.startdate} - {element.enddate + ")"}
                              </p>
                              {
                                element.description !== ""
                                  ?
                                  <div id='certificateDescription'>{element.description}</div>
                                  :
                                  null
                              }
                            </span>
                          )
                        })
                      }
                    </>
                    : null
                }
              </div>

              <div id="skill">
                {
                  props.intrestBody.length > 0 ?
                    <>
                      <h5 id='skillBorder'>{props.headings["intrest"]}</h5>
                      <ul>                    {
                        props.intrestBody.map((element) => {
                          return (
                            <li key={Math.random()}>
                              {element.intrestType}
                            </li>
                          )
                        })
                      }
                      </ul>
                    </>
                    : null
                }
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
