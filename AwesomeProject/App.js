/*
 * @Author: Frank Chu
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-25 06:45:11
 * @FilePath: /WebProject/AwesomeProject/App.js
 * @Description:
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [isHungry, setIsHungry] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}} style={{width: 200, height: 200}}/>
      <StatusBar style="auto" />
      <Button onPress={() => setIsHungry(!isHungry)} title={isHungry ? 'isHungry' : 'NotHungry'}></Button>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/GettingStartedCongratulations.png'}} style={{width: 200, height: 200}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
