import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import ProduitThumbnailStylesheet from './ProduitThumbnail.styles';
import I_Produit from '../../interfaces/produit';

const ProduitThumbnail: React.FC<
  I_Produit & {onPressProduit: Function}
> = props => {
  return (
    <TouchableHighlight
      onPress={e => props.onPressProduit(props.id)}
      style={ProduitThumbnailStylesheet.ProduitThumbnail}>
      <View testID="ProduitThumbnail">
        <View style={ProduitThumbnailStylesheet.ImageContainer}>
          <Image
            style={ProduitThumbnailStylesheet.Image}
            source={{uri: props.image}}
          />
        </View>
        <Text style={ProduitThumbnailStylesheet.Name}>{props.nom}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default ProduitThumbnail;
