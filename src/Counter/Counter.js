import React from 'react'
// import Aux from '../hoc/Aux';


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
        <>
          <h2>Counter {this.state.counter}</h2>
          <button onClick={this.increaseCounter}>+</button>
          <button onClick={this.decreaseCounter}>-</button>
        </>
    )
    // return[
    //   <h2>Counter {this.state.counter}</h2>,
    //   <button onClick={this.increaseCounter}>+</button>,
    //   <button onClick={this.decreaseCounter}>-</button>
    // ]
  }
}