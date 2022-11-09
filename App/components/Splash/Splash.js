import React from 'react';
import {Image, Text, View} from 'react-native';
import SplashStyleSheet from './Splash.styles';

function Splash(props) {
  return (
    <View style={SplashStyleSheet.Splash} testID="Splash">
      <View style={SplashStyleSheet.flexCenter}>
        <Text style={SplashStyleSheet.text}>splash</Text>

        <Image
          style={SplashStyleSheet.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    </View>
  );
}
export default Splash;
