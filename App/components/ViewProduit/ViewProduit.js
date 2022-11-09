import React from 'react';
import {Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../Button/Button';
import ViewProduitStylesheet from './ViewProduit.styles';
import {clearSelection} from '../../store/produits.reducer';

function ViewProduit(props) {
  console.log(props);
  return (
    <View style={ViewProduitStylesheet.ViewProduit} testID="ViewProduit">
      <View
        style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{props.produit.nom}</Text>
        <Image
          source={{uri: props.produit.image}}
          style={{witdh: 100, height: 100}}
        />
        <Text>{props.produit.prix}</Text>
      </View>
      <View>
        <Button text="add" />
        <Button text="remove" />
        <Button text="close" onPress={props.onClosePress} />
      </View>
    </View>
  );
}
export const UnconnectedViewProduit = ViewProduit;
export default props => {
  const p = useSelector(s => s.produits.currentProduit);
  const d = useDispatch();
  return (
    <ViewProduit
      produit={p}
      onclosePress={() => {
        d(clearSelection());
      }}
    />
  );
};
