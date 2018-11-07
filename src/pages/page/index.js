import React, { Component } from 'react';
import Tlpt from '../tlpt';

export class Home extends Component {
  render() {
    return (
      <Tlpt name="home" {...this.props} />
    );
  }
}

export class About extends Component {
  render() {
    return (
      <Tlpt name="about" {...this.props} />
    );
  }
}

export class Contact extends Component {
  render() {
    return (
      <Tlpt name="contact" {...this.props} />
    );
  }
}

export class Product extends Component {
  render() {
    return (
      <Tlpt name="product" {...this.props} />
    );
  }
}

export class Service extends Component {
  render() {
    return (
      <Tlpt name="service" {...this.props} />
    );
  }
}

export class Globals extends Component {
  render() {
    return (
      <Tlpt name="globals" {...this.props} />
    );
  }
}

