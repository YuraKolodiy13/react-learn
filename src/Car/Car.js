import React from 'react'
// import Radium from 'radium'
import classes from  './Car.css';

class Car extends React.Component {

  componentWillReceiveProps(nextProps){
    console.log('Car componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Car shouldComponentUpdate', nextProps, nextState);
    return nextProps.name.trim() !== this.props.name.trim();
  }

  componentWillUpdate(nextProps, nextState){
    console.log('Car componentWillUpdate', nextProps, nextState)
  }
  //
  // static getDerivedStateFromProps(nextProps, prevState){
  //   console.log('Car getDerivedStateFromProps', nextProps, prevState);
  //
  //   return prevState;
  // }

  componentDidUpdate(){
    console.log('Car componentDidUpdate')
  }

  // getSnapshotBeforeUpdate(){
  //   console.log('Car getSnapshotBeforeUpdate')
  // }

  componentWillUnmount(){
    console.log('Car componentWillUnmount')
  }

  render(){
    console.log('Car render');

    // if(Math.random() > 0.7){
    //   throw new Error('error random')
    // }

    const inputClases = [classes.input];

    if(this.props.name !==''){
      inputClases.push(classes.green);
      if(this.props.name.length >=4){
        inputClases.push(classes.bold);
      }
    }else {
      inputClases.push(classes.red);
    }

    const style = {
      boxShadow: '2px 2px 20px 5px rgba(0,0,0, .2)',
      ':hover': {
        boxShadow: '2px 2px 20px 5px rgba(0,0,0, .8)'
      }
    };

    return (
        <div className={classes.Car} style={style}>
          <h3>Car name: {this.props.name}</h3>
          <p>Year: <strong>{this.props.year}</strong></p>
          <input
              type="text"
              value={this.props.name}
              onChange={this.props.onChangeName}
              className={inputClases.join(' ')}
          />
          <button onClick={this.props.onDelete}>Delete</button>
        </div>
    )
  }

}



export default Car