import loading from "./loding.gif";

import React, { Component } from 'react'

export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner