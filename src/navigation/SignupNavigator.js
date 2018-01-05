import { StackNavigator } from "react-navigation";
import SignupSchoolInfo from "../views/SignupSchoolInfo";
import SignupUserinfo from "../views/SignupUserinfo";

const AppNavigator = StackNavigator({
  SignupSchoolInfo: {
    screen: SignupSchoolInfo,
    navigationOptions: {
      header: false
    }
  },
  SignupUserinfo: {
    screen: SignupUserinfo,
    navigationOptions: {
      header: false
    }
  }
});

export default AppNavigator;
