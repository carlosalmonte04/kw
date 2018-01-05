import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import AutoComplete from 'react-native-autocomplete-select'
import { signupInputContainer } from '../../assets/styles/SignupStyles'

const WIDTH = Dimensions.get('window').width

const SignupInputWithAC = (props) => {
  const {
    onSelect,
    suggestions,
    value,
    onChangeText,
    placeholder
  } = props

  return (
    <View style={[signupInputContainer, styles.ACInputContainer]}>
      <AutoComplete
        onSelect={onSelect}
        suggestions={suggestions}
        suggestionObjectTextProperty='text'
        value={value}
        inputStyle={styles.inputStyle}
        onChangeText={onChangeText}
        suggestionStyle={styles.suggestionStyle}
        suggestionTextStyle={{ fontSize: 20 }}
        suggestionsWrapperStyle={styles.suggestionsWrapperStyle}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ACInputContainer: {
    paddingBottom: 5,
    height: 50,
    zIndex: 1
  },
  inputStyle: {
    color: 'white',
    height: 50,
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500'
  },
  suggestionStyle: {
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  suggestionsWrapperStyle: {
    height: 20,
    width: WIDTH,
    alignSelf: 'center'
  }
})
export default SignupInputWithAC
