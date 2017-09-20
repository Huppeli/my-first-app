import React, { Component } from 'react';
import './App.css';

class Frame extends Component {

  // Constructor sets initial state
  constructor(props) {
    super(props);
    this.state = {
      images: "https://placeimg.com/200/200/tech",
      title: "Tech"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="Frame">
        <h4>{this.state.title}</h4>
        <img src={this.state.images} alt="" onClick={this.handleClick} />
      </div>
    );
  }
  handleClick() {
    if(this.state.images === "https://placeimg.com/200/200/tech" )
      this.setState({images: "https://placeimg.com/200/200/nature", title: "Nature"})
      else
      this.setState({images:"https://placeimg.com/200/200/tech", title: "Tech"})
  }
}

function App() {
  return(
    <div>
      <Frame />
      <Frame />
      <Frame />
      <Frame />
      <Frame />
    </div>
  );
}

export default App;
