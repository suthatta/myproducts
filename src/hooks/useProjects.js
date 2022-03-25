import React from "react";
import { useState, useEffect } from "react";

const useProjects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const rsp = await fetch("/projects.json");
      const projects = await rsp.json();
      {console.log(" projects " , projects )};
      setAllProjects(projects);
    };
    fetchProjects();
  }, []);

  return allProjects;
};

export default useProjects;