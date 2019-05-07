import React, { Component }  from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'mazda', year: 2018},
      {name: 'doodgee', year: 2118},
      {name: 'rover', year: 2008}
    ],
    pageTitle: "let's go man",
    showCar: false
  };

  toggleHandler = () => {
    this.setState({
      showCar: !this.state.showCar
    })
  };
  changeTitleHandler = (e) => {
    this.setState({
      pageTitle: e.target.value
    })
  };
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>{this.state.pageTitle}</p>
            <button onClick={this.toggleHandler}>toggle cars</button>

            {this.state.showCar ?
                this.state.cars.map((item, i) => {
                  return (
                      <Car key={i} name={item.name} year={item.year} onChangeTitle={this.changeTitleHandler}/>
                  )
                }) :
                null}
          </header>
        </div>
    );
  }
}

export default App;