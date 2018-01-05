import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

const SignupPrimaryBtn = ({ onPress, title }) => (
  <View style={{ top: 100 }}>
    <Button
      raised
      onPress={onPress}
      buttonStyle={{
        backgroundColor: '#53b7c2',
        borderRadius: 20,
        padding: 8,
        width: 200,
        alignSelf: 'center'
      }}
      textStyle={{ textAlign: 'center' }}
      title={title}
    />
  </View>
)

export default SignupPrimaryBtn