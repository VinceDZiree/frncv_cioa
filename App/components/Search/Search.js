import React from 'react';
import {Text, View} from 'react-native';
import SearchStylesheet from './Search.styles';

function Search(props) {
  return (
    <View style={SearchStylesheet.Search} testID="Search">
      <Text>Hello dude !</Text>
    </View>
  );
}
export default Search;
