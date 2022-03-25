import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import ProjectsContext from "../context/projectsContext";
import { useContext } from "react";

const SearchResults = () => {
  const { category } = useParams();
  const allProjects = useContext(ProjectsContext);
  const filteredProjects = allProjects.filter((p) => p.category === category);

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