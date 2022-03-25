import React from 'react';
import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";

const SearchResults = ({allprojects}) => {
 // console.log("props searchResults ", props);
  const { category } = useParams();
 // const allProjects = useContext(ProjectsContext);
    const filteredProjects = allprojects.filter((p) => p.category === category);
    console.log(" allProjects ", allprojects, filteredProjects );

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