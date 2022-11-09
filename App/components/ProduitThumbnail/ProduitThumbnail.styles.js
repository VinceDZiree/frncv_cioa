import {StyleSheet} from 'react-native';

const ProduitThumbnailStylesheet = StyleSheet.create({
  ProduitThumbnail: {
    width: '33%',
    backgroundColor: 'skyblue',
    height: 100,
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 5,
  },
  ImageContainer: {flexDirection: 'row', justifyContent: 'center'},
  Image: {
    width: 50,
    height: 50,
  },
  Name: {textAlign: 'center'},
});
export default ProduitThumbnailStylesheet;
