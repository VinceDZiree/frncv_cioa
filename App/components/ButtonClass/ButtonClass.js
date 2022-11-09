import React from 'react';
import {Pressable, Text, View} from 'react-native';
import ButtonClassStylesheet from './ButtonClass.styles';

class ButtonClass extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  render() {
    return (
      <Pressable
        testID="ButtonClass"
        onPress={() => {
          this.props.onPress();
        }}>
        {!this.state.isClicked ? (
          <View style={ButtonClassStylesheet.ButtonClass} testID="ButtonClass">
            {this.props.children}
          </View>
        ) : (
          <Text>click en cours</Text>
        )}
      </Pressable>
    );
  }
}
export default ButtonClass;
