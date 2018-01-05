import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import PopoverTooltip from 'react-native-popover-tooltip'

import { signupInputContainer } from '../../assets/styles/SignupStyles'

const WIDTH = Dimensions.get('window').width


class SignupInputWithTip extends Component {

  render() {
    const {ref, value, onChange} = this.props

    return (
      <View style={signupInputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email Address"
          keyboardType="email-address"
          placeholderTextColor="white"
          value={value}
          onChange={onChange}
        />
        <TouchableOpacity style={{ flex: 0.2 }}>
          <PopoverTooltip
            ref="emailTooltip"
            labelStyle={{ textAlign: 'center' }}
            tooltipContainerStyle={styles.tooltipContainerStyle}
            labelContainerStyle={styles.labelContainerStyle}
            componentWrapperStyle={{ right: -20 }}
            triangleOffset={-20}
            buttonComponent={
              <Button
                raised
                icon={{ name: 'info-outline', size: 20 }}
                onPress={() => this.refs.emailTooltip.toggle()}
                textStyle={{ textAlign: 'center' }}
                buttonStyle={styles.tooltipTriggerStyle}
              />
            }
            items={[
              {
                label: 'Use the email address that you used on your college application.',
                onPress: () => {}
              }
            ]}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    width: '70%',
    alignSelf: 'center'
  },
  tooltipContainerStyle: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    left: -20
  },
  labelContainerStyle: {
    width: WIDTH / 2,
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  tooltipTriggerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    width: 40,
    height: 40,
    position: 'absolute',
    right: 0,
    bottom: -8,
    padding: 0
  }
})

export default SignupInputWithTip