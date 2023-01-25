import React, { Component } from "react";
import '../App.css';
import Draggable from 'react-draggable';


export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (

      <Draggable handle="handle">
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={this.handleClick}>&times;
             <img id="handle" className="modalimg" src={this.props.url} alt={"loading"}></img>
            </span>
          </div>
        </div>
      </Draggable>
    );
  }
}

