function ToyCard(props){
    return(
      <div className = "card">
        <h2>
          {props.name}
        </h2>
        <img 
          src={props.image}
          className="toy-avatar"
          alt="toy"
        />
        <p>{props.likes} likes</p>
        <button
          className="like-btn"
          id={props.id}
        >
          like
        </button>
      </div>
    )
}

export default ToyCard