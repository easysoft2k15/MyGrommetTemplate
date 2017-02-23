import React, { Component } from "react";

import App from "grommet/components/App";
import Title from "grommet/components/Title";

//Import F# bundle
import {getData} from "../fsharp_out/fsharpBundle.js";

export default class BasicApp extends Component {
  render() {
    return (
      <App>
        <Title>Hello World</Title>
        <p>Hello from a Grommet page!</p>
      </App>
    );
  }
}
