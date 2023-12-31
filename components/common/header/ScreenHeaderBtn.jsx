import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlesPress }) => {
  return (
   <TouchableOpacity style={styles.btnContainer} onPress={handlesPress}>
    <Image source={iconUrl}  resizeMode='cover' style={styles.btnImg(dimension)}/>
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn