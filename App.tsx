/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './App.styles';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{`${count}`}</Text>
      <Button onPress={handleIncrement} title="Increment" />
      <Button onPress={handleReset} title="Reset" />
    </View>
  );
}

export default App;
