import {
  StackNavigator
} from 'react-navigation'
import DashboardNavigator from './DashboardNavigator'
import SignupNavigator from './SignupNavigator'

const AppNavigator = StackNavigator({
  SignupNavigator: {
    screen: SignupNavigator,
    navigationOptions: {
      header: false
    }
  },
  DashboardNavigator: {
    screen: DashboardNavigator,
    navigationOptions: {
      header: false
    }
  }
})

export default AppNavigator
