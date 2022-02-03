import './App.css';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import {useState} from "react"

// TODO: We'll be fetching projects later on
// import projects from './data/projects';

function App() {

  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)

  function fetchProjects(){
    fetch ("http://localhost:4000/projects")
    .then(r=> r.json())
    .then(projects =>{
      console.log(projects)
      setProjects(projects)
    })
  }

  function toggleDarkMode(){
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  const darkModeClass = isDarkMode ? 'App' : 'App light'

  return (
    <div className={darkModeClass}>
      <Header 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode}
      />
      <ProjectForm />
      <button onClick={() => fetchProjects()}>Fetch Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
