import React, { Component } from "react";

export default class Class_compnent extends Component {
  state = { counter: this.props.count };
  render() {
    return (
      <div>
        <h3>Counter using React class component</h3>
        <h2>{this.state.counter}</h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </div>
    );
  }
}
