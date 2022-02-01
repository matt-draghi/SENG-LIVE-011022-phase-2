import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

//TODO: we will be fetching projects later on
import projects from './data/data';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;
