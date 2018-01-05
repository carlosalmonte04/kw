import React from 'react'
import { View, TextInput, Dimensions } from 'react-native'
import { signupInputContainer } from '../../assets/styles/SignupStyles'


const SignupInput = ({ onChange, value, placeholder, ref }) => {


  return (
    <View style={signupInputContainer}>
      <TextInput
        style={{ fontSize: 20, textAlign: 'center', color: 'white' }}
        placeholder={placeholder}
        placeholderTextColor="white"
        value={value}
        onChange={onChange}
      />
    </View>
  )
}

export default SignupInput