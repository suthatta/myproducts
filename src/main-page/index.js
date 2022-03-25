import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedProject from './featured-project';
import SearchReaults from '../search-results';
import ProjectFilter from './project-filter';
import ProjectFromQuery from '../project/ProjectFromQuery';


// props is suptitle sent to header.js

function App() {
const [allProjects, setAllProjects ] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const rsp = await fetch("/projects.json");
    const projects = await rsp.json();
    setAllProjects(projects);
  };
  fetchData();
}, [])

let featuredProject = useMemo(() => {
  if(allProjects.length) {
    const randomIndex = Math.floor(Math.random() * allProjects.length)
    return allProjects[randomIndex];
  }
}, [allProjects]);


  
const userName ="Providing all learning projects by Suthatta"
  return (
    <Router> 
        <div className="container">   
         <Header subtitle ={userName} />
         <ProjectFilter allProjects ={allProjects} />
        </div>

      <Routes>
        <Route path="/about">About</Route>
        <Route path="/searchresults/:category" 
        element={ <SearchReaults allprojects={allProjects} />} />
        <Route pate="/project/:id" 
        element={ <ProjectFromQuery allProjects={allProjects} />} />
        <Route path="/" 
        element={ <FeaturedProject project={featuredProject} />} />
      </Routes>
 
   </Router>
  );
}

export default App;
