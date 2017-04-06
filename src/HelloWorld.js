import React from 'react'


class HelloWorld extends React.Component{
  render(){
    return(
      <div>
        <h1> {this.props.txt} </h1>  
        <h1> {this.props.cat} </h1>
        <b>Bold</b>
      </div>
    ) 
  }
}

HelloWorld.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

HelloWorld.defaultProps = {
  txt: "This is the default text",
  cat: 5
}

// const HelloWorld = () => <h1> Hello World and Good Day</h1>

module.exports = HelloWorld