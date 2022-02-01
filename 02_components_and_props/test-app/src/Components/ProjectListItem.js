import React from 'react';

function ProjectListItem({
    id,
    name,
    about,
    phase,
    link,
    image
}) {
  return (
    <li>
      <figure>
        <img src={image} alt={name}/>
        <button>clap</button>
      </figure>
    </li>
  )
}

export default ProjectListItem;
