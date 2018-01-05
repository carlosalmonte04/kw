/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import AppNavigator from "./src/navigation/AppNavigator";
import TempSplash from "./src/views/TempSplash";

const DEV = true;

const store = createStore(() => {}); // temp reducer func

export default class App extends Component {
  state = {
    mounted: false
  };

  componentDidMount() {
    !DEV
      ? setTimeout(
          () =>
            this.setState({
              mounted: true
            }),
          4000
        )
      : this.setState({ mounted: true });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar hidden={false} barStyle="light-content" />
          {this.state.mounted ? <AppNavigator /> : <TempSplash />}
        </View>
      </Provider>
    );
  }
}
