import { useState } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';

const Card = (props) =>  {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="Card">
      <Link to={'/edit/' + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <Link to={`/crewmate/${props.id}`}>
  <h2 className="title">{props.name}</h2>
</Link>


      <p className="author">Role: {props.role}</p> {/*  Role */}
      <p className="description">Weapon: {props.weapon}</p> {/* Weapon */}
      <p className="description">Speed: {props.speed}</p> {/* Speed */}
      
      <button className="betButton" onClick={updateCount}>
        👍 Like Count: {count}
      </button>
    </div>
  );
};

export default Card;
