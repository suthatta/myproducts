import { useMemo } from "react";

const useFeaturedProject = (allProjects) => {
  const featuredProject = useMemo(() => {
    if (allProjects.length) {
      const randomIndex = Math.floor(Math.random() * allProjects.length);
      return allProjects[randomIndex];
    }
  }, [allProjects]);

  return featuredProject;
};

export default useFeaturedProject;
