import React from 'react'

class StateComponent extends React.Component{
  constructor(){
    super();
    this.state = {
      text: 'this is the state text',
      cat: 0
    }
  }

  update(e){
    this.setState({text: e.target.value})
  }


  render(){
    return(
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1> {this.state.text}</h1>
      </div>
    )
  }
}

module.exports = StateComponent