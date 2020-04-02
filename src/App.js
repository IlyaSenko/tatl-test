import React from 'react';
import Popup from './Popup';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "closed",
      data: ""
    }
    this.showPrompt = this.showPrompt.bind(this);
    this.showData = this.showData.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };
  showPrompt() {
    // let inputData = prompt("Please enter some data");
    this.setState({
      mode: "input"
    });
  };

  showData() {
    // alert(this.state.inputData)
    this.setState({
      mode: "output"
    });
  };

  handleClose(data) {
    this.setState({
      mode: "closed",
      data
    })
  }

  render() {
    let {mode, data} = this.state
    return (
      <div className="App">
        <button onClick={this.showPrompt} type="button">Input Data</button>
        <button onClick={this.showData} type="button">Output Data</button>
        {mode !== "closed" ? (
          <Popup data={data} mode={mode} handleClose={this.handleClose} />
        ) : null}
      </div>
    );
  }
}

export default App;
