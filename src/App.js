import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      position: "top",
      hovering: false,
    };
  }

  handleClick = (pos) => {
    this.setState({
      position: pos,
    })
  };

  handleMouseEnter = () => {
    this.setState({
      hovering: true,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hovering: false
    });
  };

  render(){
    return(
      <div className='App'>
        <div className='btn-position'>  
          <button
          className={this.state.position === 'top' ? 'btn active' : 'btn'} 
          onClick={(e) => {
            this.handleClick('top');
          }}>
            Top
          </button>

          <button
          className={this.state.position === 'left' ? 'btn active' : 'btn'} 
          onClick={(e) => {
            this.handleClick('left');
          }}>
            Left
          </button>

          <p className='grp-name'>
            select the position of the hovering!!
          </p>

          <button
          className={this.state.position === 'right' ? 'btn active' : 'btn'} 
          onClick={(e) => {
            this.handleClick('right');
          }}>
            Right
          </button>

          <button
          className={this.state.position === 'down' ? 'btn active' : 'btn'} 
          onClick={(e) => {
            this.handleClick('down');
          }}>
            Down
          </button>
        </div>
        
        <div id="button-container">
          <button className='btn hover-btn'
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}>
            Hover Over Me!!
          </button>

          {this.state.hovering && <Tooltip position={this.state.position} />}
        </div>
      </div>
    )
  }
}

export default App;