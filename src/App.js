import React, { Component }  from 'react';
import './App.scss';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';


export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props){
    console.log('App constructor');
    super(props);

    this.state = {
      clicked: false,
      cars: [
        {name: 'mazda', year: 2018},
        {name: 'doodgee', year: 2118},
        {name: 'rover', year: 2122}
      ],
      pageTitle: "let's go man",
      showCar: false
    }
  }

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

  componentWillMount(){
    console.log('App compWillMount');
  }

  componentDidMount(){
    console.log('App compDidMount');
  }


  render() {
    console.log('App render');
    let cars = null;

    if(this.state.showCar){
      cars = this.state.cars.map((item, i) => {
        return (
           <ErrorBoundary key={i}>
             <div className="wrap">
               <Car
                   name={item.name}
                   year={item.year}
                   onDelete = {this.deleteHandler.bind(this, i)}
                   onChangeName = { e => this.onChangeName(e.target.value, i)}
               />
               <ClickedContext.Provider value={this.state.clicked}>
                  <Counter/>
               </ClickedContext.Provider>
               <button onClick={() => this.setState({clicked: !this.state.clicked})}>change click</button>
             </div>
           </ErrorBoundary>
        )
      })
    }
    return (
        <div className="App">
          <h1>{this.state.pageTitle}</h1>
          <button onClick={this.toggleHandler}>toggle cars</button>



          <div style={{
            padding: 20,
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            {cars}
          </div>

        </div>
    );
  }
}

export default App;