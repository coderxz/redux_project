import React,{Component} from 'react';
export default class Counter extends Component{
  increment = () => {
    const value = this.select.value
    this.props.increment(value*1)
  }
  asyncIncrement = () => {
    const value = this.select.value
    this.props.asyncIncrement(value*1,1000)
  }
  decrement = () => {
    const value = this.select.value
    this.props.decrement(value*1)
  }
  ifAdd = () =>{
    const value = this.select.value
    const {count} =this.props
    if (count%2===1){
      this.props.increment(value*1)
    }
  }
  render() {
    return(
      <div>
      <h2>当前计数:{this.props.count}</h2>
        <select ref={select => {this.select = select}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.asyncIncrement}>asyncAdd</button>&nbsp;&nbsp;
        <button onClick={this.ifAdd}>ifAdd</button>
      </div>
    )
  }
}