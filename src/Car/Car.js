import React from 'react'

export default props => (
    <div style={{border: '1px solid red'}}>
      <h3>Car name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input type="text" onChange={props.onChangeTitle}/>
      <button onClick={props.onChangeTitle}>click</button>
    </div>
)