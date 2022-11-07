import React from 'react';
import {Text, View} from 'react-native';
import AppStylesheet from './App.styles';

function App(props) {
  return (
    <View>
      <Text style={{...AppStylesheet.textCyan, ...AppStylesheet.underline}}>
        Hello dude !
      </Text>
    </View>
  );
}
export default App;
