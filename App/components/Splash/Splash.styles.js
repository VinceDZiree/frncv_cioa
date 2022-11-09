import {StyleSheet} from 'react-native';

const SplashStyleSheet = StyleSheet.create({
  Splash: {
    backgroundColor: 'cyan',
    flexGrow: 1,
  },
  text: {
    color: 'white',
    fontSize: 45,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },

  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
  },
});
export default SplashStyleSheet;
