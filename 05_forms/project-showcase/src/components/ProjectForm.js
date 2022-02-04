import React, {useState} from "react";

function ProjectForm({handleAddProject}) {
  const [name, setName] = useState("")
  const [about, setAbout] = useState("")
  const [phase, setPhase] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState("")

  // const handleChange = (e) =>{
  //   const {name, value} = e.target;
  //   switch (name) {
  //     case "name":
  //       setName(value)
  //       break;
  //     case "about":
  //       setAbout(value)
  //       break;
  //     case "phase":
  //       setPhase(value)
  //       break;
  //     case "link":
  //       setLink(value)
  //       break;
  //     case "image":
  //       setImage(value)
  //       break;
  //     default:
  //   }
  // }

  const setters = {
    name: setName,
    about: setAbout,
    phase: setPhase,
    link: setLink,
    image: setImage
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setters[name](value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {name, about, phase, link, image}
    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json)
    .then(savedProject => {
      handleAddProject(savedProject)
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          onChange={handleChange}
          type="text" 
          id="name" 
          name="name"
          value={name}
        />

        <label htmlFor="about">About</label>
        <textarea 
          onChange={handleChange}
          id="about" 
          name="about"
          value={about}  
        />

        <label htmlFor="phase">Phase</label>
        <select 
          onChange={handleChange}
          name="phase" 
          id="phase"
          value={phase}  
        >
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          onChange={handleChange}
          type="text" 
          id="link" 
          name="link" 
          value={link}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          onChange={handleChange}
          type="text"
          id="image" 
          name="image" 
          value={image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;