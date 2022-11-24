import React from 'react'
import Logo from "../assets/Logo MS.png"
import {Image, Pressable, SafeAreaView} from 'react-native'


const Header = () => {
  return (
      <SafeAreaView>
    <Image style = {{width:110, height:57,}} source = {require ("../assets/Logo MS.png")}></Image>
    </SafeAreaView>
  )
}

export default Header;