import React, { Component } from "react";
import { View, Image } from "react-native";
import {
  centeredContentView,
  centeredForm
} from "../assets/styles/SignupStyles";

import SignupInput from "../components/signup/SignupInput";
import SignupInputWithTip from "../components/signup/SignupInputWithTip";
import SignupPrimaryBtn from "../components/signup/SignupPrimaryBtn";

const kwLogo = require("../assets/img/kw-logo.jpg");

export default class SignupUserinfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  handleFirstNameChange = firstName => {
    this.setState({ firstName });
  };

  handleLastNameChange = lastName => {
    this.setState({ lastName });
  };

  handleEmailChange = ({ email }) => {
    this.setState({ email });
  };

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    // validate inputs then move to next screen
    navigate("DashboardNavigator");
  };

  render() {
    return (
      <View style={centeredContentView}>
        <Image source={kwLogo} />
        <View style={centeredForm}>
          <SignupInput
            placeholder="First Name"
            onChange={this.handleFirstNameChange}
            value={this.state.firstName}
          />
          <SignupInput
            placeholder="Last Name"
            onChange={this.handleLastNameChange}
            value={this.state.lastName}
          />
          <SignupInputWithTip
            placeholder="Email Address"
            tip="Use the email address that you used on your college application."
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </View>
        <SignupPrimaryBtn onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}
