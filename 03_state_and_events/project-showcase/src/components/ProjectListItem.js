import React, {useState} from "react";

function ProjectItem({
  id,
  name,
  about,
  phase,
  link,
  image
}) {
  // optionally we can destructure individual properties from project
  const [claps, setClaps] = useState(0)

  function handleClapClick(event){
    setClaps(claps => claps + 1)
    /*
    Why does setClaps(claps++) cause a problem when setClaps(claps + 1) wouldn't?
      - claps++ is equivalent to claps = claps + 1
    setClaps(claps => claps + 1) only returns a new value of claps
    */
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClapClick}>👏{claps}</button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
}

export default ProjectItem;


