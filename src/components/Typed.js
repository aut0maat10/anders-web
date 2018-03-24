import React from 'react';
import Typed from 'typed.js';

// const TypeSpan = styleMedia.span`
//   color: #88bdb; 
// `; 

export default class TypeWriter extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      startDelay: 1000,
      stringsElement: '#typed-strings',
      //strings: strings,
      typeSpeed: 170,
      backSpeed: 100,
      loop: true,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span className="typewriter"
            style={{
              whiteSpace: 'pre',
              fontFamily: 'Rubik',
              fontSize: '30px',
              fontWeight: '700',
              color: '#272727'
            }}
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
}
