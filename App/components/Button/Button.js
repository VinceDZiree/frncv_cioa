import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import ButtonStylesheet from './Button.styles';

function Button(props) {
  // console.log(props);
  return (
    <TouchableHighlight
      testID="Button"
      onPress={e => {
        props.onPress();
      }}>
      <View style={ButtonStylesheet.Button}>
        <Text style={ButtonStylesheet.contentText}>{props.children}</Text>
      </View>
    </TouchableHighlight>
  );
}
export default Button;
