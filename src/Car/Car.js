import React from 'react'
import Radium from 'radium'
import './Car.css';


const Car = props => {
  const inputClases = ['input'];

  if(props.name !==''){
    inputClases.push('green');
    if(props.name.length >=4){
      inputClases.push('bold');
    }
  }else {
    inputClases.push('red');
  }

  const style = {
    boxShadow: '2px 2px 20px 5px rgba(0,0,0, .2)',
    ':hover': {
      boxShadow: '2px 2px 20px 5px rgba(0,0,0, .8)'
    }
  };

  return (
      <div className="Car" style={style}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input
            type="text"
            value={props.name}
            onChange={props.onChangeName}
            className={inputClases.join(' ')}
        />
        <button onClick={props.onDelete}>Delete</button>
      </div>
  )
};


export default Radium(Car)