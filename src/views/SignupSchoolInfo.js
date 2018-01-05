import React, { Component } from "react";
import { View, Image } from "react-native";
import {
  centeredContentView,
  centeredForm
} from "../assets/styles/SignupStyles";

import SignupInput from "../components/signup/SignupInput";
import SignupPrimaryBtn from "../components/signup/SignupPrimaryBtn";
import SignupInputWithAC from "../components/signup/SignupInputWithAC";

const kwLogo = require("../assets/img/kw-logo.jpg");

const suggestions = [ // array from backend 
  { text: "NYU", schoolName: "nyu" },
  { text: "Harvard", schoolName: "harvard" },
  { text: "Cornell", schoolName: "cornell" },
  { text: "Berklee", schoolName: "berklee" },
  { text: "Standford", schoolName: "stanford" },
  { text: "UCLA", schoolName: "ucla" },
  { text: "Columbia", schoolName: "columbia" }
];

export default class SignupSchoolInfo extends Component {
  state = {
    schoolName: "",
    selectedSchoolId: "",
    accessCode: ""
  };

  handleAccessCodeChange = accessCode => {
    this.setState({ accessCode });
  };

  handleSchoolChange = schoolName => {
    this.setState({ schoolName });
  };

  handleSchoolSelect = ({ text: schoolName }) => {
    this.setState({ schoolName });
    // this.accesCodeInput.focus()
  };

  handleSubmit = () => {
    // validate inputs then move to next screen
    const { navigate } = this.props.navigation;
    navigate("SignupUserinfo");
  };

  render() {
    return (
      <View style={centeredContentView}>
        <Image source={kwLogo} />
        <View style={centeredForm}>
          <SignupInputWithAC
            placeholder="School"
            suggestions={suggestions}
            onSelect={this.handleSchoolSelect}
            value={this.state.schoolName}
            onChangeText={this.handleSchoolChange}
          />
          <SignupInput
            placeholder="Access Code"
            onChange={this.handleAccessCodeChange}
            value={this.state.accessCode}
          />
        </View>
        <SignupPrimaryBtn onPress={this.handleSubmit} title="Sign In" />
      </View>
    );
  }
};