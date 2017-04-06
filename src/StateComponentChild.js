import React from 'react'


class StateComponentChild extends React.Component{
  constructor(){
    super();
    this.state={
      text: 'this is some child text'
    }
 }

 update(event){
  this.setState({
    text: event.target.value
  })
 }

 render(){
  return(
    <div>
      <Widget update={this.update.bind(this)} />
      <Widget update={this.update.bind(this)} />
      <Widget update={this.update.bind(this)} />
      <h1>{this.state.text}</h1>
    </div>
    )
 }

}

const Widget = (props) =>
  <input type="text" onChange={props.update} /> 

module.exports= StateComponentChild