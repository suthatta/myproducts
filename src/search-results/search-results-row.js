//import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



import "./search-results.css";

const SearchResultsRow = ({ project }) => {
  //const history = useHistory();
  const navigate = useNavigate();

  const setActive = () => {
    navigate.push(`/project/${project.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{project.address}</td>
      <td>{project.price}</td>
      <td>{project.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
