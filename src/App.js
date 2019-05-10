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
  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars
    });
  };

  deleteHandler (i){
    const cars = this.state.cars.concat();
    cars.splice(i, 1);
    this.setState({cars})
  }


  render() {

    let cars = null;

    if(this.state.showCar){
      cars = this.state.cars.map((item, i) => {
        return (
            <Car key={i}
                 name={item.name}
                 year={item.year}
                 onDelete = {this.deleteHandler.bind(this, i)}
                 onChangeName = { e => this.onChangeName(e.target.value, i)}
            />
        )
      })
    }
    return (
        <div className="App">
          <h1>{this.state.pageTitle}</h1>
          <button onClick={this.toggleHandler}>toggle cars</button>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 20,
          }}>
            {cars}
          </div>

        </div>
    );
  }
}

export default App;