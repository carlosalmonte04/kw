import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const SCREEN_ICONS = {
  Search: 'search',
  Messages: 'envelope-o',
  Channels: 'comment-o',
  Contacts: 'address-book-o',
  Profile: 'user-circle-o'
}

const TabBarIcon = ({ screenName }) => {
  return (
    <Icon name={SCREEN_ICONS[screenName]} size={20} color="#c5c5c5" />
  )
}


export default TabBarIcon