import React, { Component } from "react";
import Route from "./app/route";
import { Provider } from "mobx-react";
import Store from './app/store'
export default class App extends Component {
  render() {
    return (
      <Provider {...Store}>
        <Route />
      </Provider>
    );
  }
}
