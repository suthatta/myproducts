import React from "react";
import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import ProjectsContext from "../context/projectsContext";
import { useContext } from "react";

const SearchResults = () => {
  const { category } = useParams();
  {console.log("category" , category)};
  const allProjects = useContext(ProjectsContext);
  {console.log("allProjects" , allProjects)};
    const filteredProjects = allProjects.filter((p) => p.category === category);
    {console.log(" allProjects ", allProjects, filteredProjects )};

  return (
    <div className="mt-2">
      <h4>Results for {category}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredProjects.map((p) => (
            <SearchResultsRow key={p.id} project={p} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;