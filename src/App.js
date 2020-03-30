import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputData: ""
    }
    this.showPrompt = this.showPrompt.bind(this);
    this.showData = this.showData.bind(this);
  };
  showPrompt() {
    let inputData = prompt("Please enter some data");
    this.setState({
      inputData
    });
  };

  showData() {
    alert(this.state.inputData)
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.showPrompt} type="button">Input Data</button>
        <button onClick={this.showData} type="button">Output Data</button>
      </div>
    );
  }
}

export default App;
