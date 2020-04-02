import React, { Component } from 'react';
import './Popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    this.setState({
      data: e.target.value
    })
  }

  handleClose() {
    this.props.handleClose(this.state.data)
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="Popup">
        {this.props.mode === "input" ? (
          <input type="text" onChange={this.handleChange} value={this.state.data} />
        ) : (
          <p>
            {this.state.data}
          </p>
        )}
        <button onClick={this.handleClose} type="button">ok</button>
      </div>
    );
  }

}

export default Popup;
