import React from 'react'
import './Counter.scss';
// import Aux from '../hoc/Aux';
import Counter2 from '../Counter2/Counter2';


export default class Counter extends  React.Component{

  state = {
    counter: 0
  };

  increaseCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  };

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  };

  render(){
    return(
        <div className="carWrap">
          <h2>Counter {this.state.counter}</h2>
          <Counter2/>
          <button onClick={this.increaseCounter}>+</button>
          <button onClick={this.decreaseCounter}>-</button>
        </div>
    )
    // return[
    //   <h2>Counter {this.state.counter}</h2>,
    //   <button onClick={this.increaseCounter}>+</button>,
    //   <button onClick={this.decreaseCounter}>-</button>
    // ]
  }
}