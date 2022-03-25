

import React from "react";
import { useContext } from "react";
//import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ProjectsContext from "../context/projectsContext";

const ProjectFilter = ({allProjects}) => {
        const navigate = useNavigate();
     //   const allProjects = useContext(ProjectsContext);
        console.log('all project', allProjects)

        const categories = allProjects
        ? Array.from(new Set(allProjects.map((p) => p.category)))
        : [];
        categories.unshift(null);
        
        const onSearchChange = (e) => {
            const category = e.target.value;
            {console.log("category value " , category)}
           navigate(`/searchresults/${category}`);
          };

    return ( 
        <div className="row mt-3">
        <div className="offset-md-2 col-md-4">
          Look for projects category:
        </div>
        <div className="col-md-4 mb-3">
       {console.log("category ", categories )}
          <select title="test" className="form-select" onChange={onSearchChange}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    );

}

export default ProjectFilter;