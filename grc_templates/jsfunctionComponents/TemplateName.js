import React from 'react';
import {Text, View} from 'react-native';
import TemplateNameStylesheet from './TemplateName.styles';

function TemplateName(props) {
  return (
    <View style={TemplateNameStylesheet.TemplateName} testID="TemplateName">
      <Text>Hello dude !</Text>
    </View>
  );
}
export default TemplateName;
