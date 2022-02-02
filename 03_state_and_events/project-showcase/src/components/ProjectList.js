import React, {useState} from "react";
import ProjectListItem from "./ProjectListItem";


//we need to store the contents of the input tag in state
//what about searchResults?
  //we do not need to store this in state because we can derive the search results from the input state and the project list
function ProjectList(props) {
  const [searchText, setSearchText] = useState("")

  const searchResults = props.projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(searchText.toLowerCase())
      ||
      project.about.toLowerCase().includes(searchText.toLowerCase())
    )
  })
  // map over the array of project objects => return an array of ProjectItem components
  // [{},{},{},{}] => [<ProjectListItem />, <ProjectListItem />, <ProjectListItem />, <ProjectListItem />]
  const projectItems = searchResults.map((project) => {
    return <ProjectListItem key={project.id} {...project} />;
  });

  const handleSearch = ({target}) => {
    setSearchText(target.value)
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={handleSearch}
      />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;