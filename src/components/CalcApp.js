import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
      num: '',
      oper: '',
    };
    this.numPress = this.numPress.bind(this);
    this.operPress = this.operPress.bind(this);
  }

  resetState() {
    this.setState({ val: 0, num: '', oper: '' });
  }

  numPress(number) {
    this.state.num += number;
    this.setState({ num: this.state.num });
  }

  operPress(operator) {
    if (this.state.num === '') {
      this.state.oper = operator;
      this.setState({ oper: this.state.oper });
    } else if (this.state.oper === '' || (this.state.oper === '=' && this.state.num !== '')) {
      this.state.val = Number(this.state.num);
      this.state.num = '';
      this.setState({ val: this.state.val, num: this.state.num, oper: operator });
    } else if (this.state.oper === '+') {
      this.state.val += Number(this.state.num);
      this.state.num = '';
      this.setState({ val: this.state.val, num: this.state.num, oper: operator });
    } else if (this.state.oper === '-') {
      this.state.val -= Number(this.state.num);
      this.state.num = '';
      this.setState({ val: this.state.val, num: this.state.num, oper: operator });
    } else if (this.state.oper === 'x') {
      this.state.val *= Number(this.state.num);
      this.state.num = '';
      this.setState({ val: this.state.val, num: this.state.num, oper: operator });
    } else if (this.state.oper === '÷') {
      this.state.val /= Number(this.state.num);
      this.state.num = '';
      this.setState({ val: this.state.val, num: this.state.num, oper: operator });
    } else if (this.state.oper === '=' && this.state.num === '') {
      this.setState({ val: this.state.val, num: this.state.num, oper: operator });
    }
  }

  btnPress(className, children) {
    if (className === 'calc-number' || className === 'bigger-btn') {
      this.numPress(children);
    } else if (className === 'calc-operator') {
      this.operPress(children);
    }
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.num || this.state.val}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={this.btnPress.bind(this)}
            >÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number"
              onClick={this.btnPress.bind(this)}
            >7</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={this.btnPress.bind(this)}
            >8</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={this.btnPress.bind(this)}
            >9</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={this.btnPress.bind(this)}
            >x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number"
              onClick={this.btnPress.bind(this)}
            >4</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={this.btnPress.bind(this)}
            >5</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={this.btnPress.bind(this)}
            >6</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={this.btnPress.bind(this)}
            >-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number"
              onClick={this.btnPress.bind(this)}
            >1</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={this.btnPress.bind(this)}
            >2</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={this.btnPress.bind(this)}
            >3</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={this.btnPress.bind(this)}
            >+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="bigger-btn"
              onClick={this.btnPress.bind(this)}
            >0</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>.</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={this.btnPress.bind(this)}
            >=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
