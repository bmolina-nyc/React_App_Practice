import React from 'react'

class PropsChildren extends React.Component{
  render(){
    return <button> I <Heart />React </button>
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}

module.exports= PropsChildren;