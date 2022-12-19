import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 150
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.img }
        style={styles.image}
      />
      {/* <Text style={styles.header}>{item.title}</Text> */}
      {/* <Text style={styles.body}>{item.body}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
  },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11, 
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
  },
  // header: {
  //   color: "#222",
  //   fontSize: 15,
  //   fontWeight: "bold",
  //   textAlign:'center',
  //   paddingTop:10,
  // },
})

export default CarouselCardItem