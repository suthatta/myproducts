
import { useContext } from "react";
//import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ProjectsContext from "../context/projectsContext";

const ProjectFilter = () => {
        const navigate = useNavigate();
        const allProjects = useContext(ProjectsContext);

        const categories = allProjects
        ? Array.from(new Set(allProjects.map((p) => p.category)))
        : [];
        categories.unshift(null);
        
        const onSearchChange = (e) => {
            const category = e.target.value;
            navigate.push(`/searchresults/${category}`);
          };

    return ( 
        <div className="row mt-3">
        <div className="offset-md-2 col-md-4">
          Look for projects category:
        </div>
        <div className="col-md-4 mb-3">
          <select className="form-select" onChange={onSearchChange}>
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