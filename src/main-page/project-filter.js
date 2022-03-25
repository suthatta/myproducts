
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import ProjectsContext from "../context/projectsContext";

const ProjectFilter = () => {

        const history = useHistory();
        const allProjects = useContext(ProjectsContext);

        const categories = allProjects
        ? Array.from(new Set(allProjects.map((p) => p.category)))
        : [];
        categories.unshift(null);
        
        const onSearchChange = (e) => {
            const country = e.target.value;
            history.push(`/searchresults/${category}`);
          };

    return ( 
        <div className="row mt-3">
            <div className="offset-md2 col-md4">
                Look for project on a category
            </div>
            <div className="col-md-4 mb-3">
            <select className="from-select" >
                {categories.map((c) => (
                    <option key={c} value={c}> 
                    {c}
                    </option>
                ) )}
            </select>
            </div>
        </div>
    );

}

export default ProjectFilter;