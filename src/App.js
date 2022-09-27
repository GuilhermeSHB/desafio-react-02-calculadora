import React, { Component } from "react";


class Calc extends Component {
  state = {
    n1: null,
    n2: null,
    res: null,
    sinal: null
  };

  handleChange = (e) =>
    this.setState({
      n1: e.target.value
    });

  handleChange2 = (e) => {
    this.setState({
      n2: e.target.value
    });
  };

  mult = () => {
    let { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: Number(n1) * Number(n2),
        sinal: "*"
      });
    }
  };

  divi = () => {
    let { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: Number(n1) / Number(n2),
        sinal: "/"
      });
    }
  };

  soma = () => {
    let { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: Number(n1) + Number(n2),
        sinal: "+"
      });
    }
  };

  subt = () => {
    let { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: Number(n1) - Number(n2),
        sinal: "-"
      });
    }
  };

  clear = () => {
    let { n1, n2 } = this.state;
    this.setState({
      n1: "",
      n2: "",
      res: "",
      sinal: ""
    });
  };

  render() {
    return (
      <div className="containerprinc">
        <div className="containersec">
          <div className="titulo">
            <h1>CALCULADORA</h1>
          </div>
          <div className="campos">
            <input
              onChange={this.handleChange}
              type="number"
              value={this.state.n1}
            />
            <p>{this.state.sinal}</p>
            <input
              onChange={this.handleChange2}
              type="number"
              value={this.state.n2}
            />
          </div>
          <div className="operacoes">
            <button onClick={this.mult}>*</button>
            <button onclick={this.divi}>/</button>
            <button onClick={this.soma}>+</button>
            <button onClick={this.subt}>-</button>
          </div>
          <div className="limpar">
            <button onClick={this.clear}>Limpar</button>
          </div>
          <div className="result">
            <h3>Resultado: {this.state.res}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
