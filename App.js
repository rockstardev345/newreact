import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const a = {name:"omar",phone:123456789,country:"brazil",address:{address1: "32 street gol" }} ;
  console.log(a.name);
  //a = 40 ;
  //console.log(a);

  return (
    <View style={styles.container}>
      <View style={styles.bluecontainer}></View>
      <View style={styles.redcontainer}></View>
      <Text>hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74c3c',
    flexDirection: 'row',
    marginTop:20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  bluecontainer:{
    backgroundColor: '#2980b9',
    height:100,
    width:100,
  },
  redcontainer:{
    backgroundColor: '#95a5a6',
    height:100,
    width:200,
  }

});
