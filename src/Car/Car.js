import React from 'react'
import classes from  './Car.css';
import withClass from  '../hoc/withClass';

class Car extends React.Component {

  render(){


    const inputClases = [classes.input];

    if(this.props.name !==''){
      inputClases.push(classes.green);
      if(this.props.name.length >=4){
        inputClases.push(classes.bold);
      }
    }else {
      inputClases.push(classes.red);
    }


    return (
        <React.Fragment>
          <h3>Car name: {this.props.name}</h3>
          <p>Year: <strong>{this.props.year}</strong></p>
          <input
              type="text"
              value={this.props.name}
              onChange={this.props.onChangeName}
              className={inputClases.join(' ')}
          />
          <button onClick={this.props.onDelete}>Delete</button>
        </React.Fragment>
    )
  }

}



export default withClass(Car, classes.Car)