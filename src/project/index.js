
import React from "react";
import "./project.css"
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";

const Project = ({project}) => {

    const [inquiryShown, setInquiryShown] = useState(false);
    const inquiryClick = () => {
      setInquiryShown(!inquiryShown);
    };
    return ( 
    <div>
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{project.category}</h5>
            </div>
            <div className="row">
            <h3 className="col-md-12">{project.address}</h3>
            </div>
             <div className="row">
                    <div className="col-md-7">
                    <img src={`/images/${project.photo}.jpeg`} alt="Project" />
                    </div>
                    <div className="col-md-5">
                    <p className="price">${project.price}</p>
                     <p>{project.description}</p>
                        <img
                            src={emailIcon}
                             height="50"
                            alt="inquiry"
                             onClick={inquiryClick}
          />
                            {inquiryShown && <Inquiry project={project} />}
                    </div>
            </div>
    </div>
    </div>
    );
}
 
export default Project;