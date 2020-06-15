import React, { Component } from "react";

export class Button extends Component {
  handleClick = () => {
    alert("Kliknięto przycisk!");
  };

  render() {
    return (
      <button className={this.props.buttonColor} onClick={this.handleClick}>
        {this.props.buttonText}
      </button>
    );
  }
}
