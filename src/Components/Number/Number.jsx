import React from 'react';
import './Number.css';

class Number extends React.Component {

  render() {
    return (
      <section id="number-container">
        <p id="number">{this.props.calledNumber}</p>
      </section>
    );
  }
}



export default Number;
