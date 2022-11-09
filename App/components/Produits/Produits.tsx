import React from 'react';
import {Text, View} from 'react-native';
import ProduitsScrollContainer from '../ProduitsScrollContainer/ProduitsScrollContainer';
import ProduitsStylesheet from './Produits.styles';
import PropTypes from 'prop-types';
import SearchProduit from '../SearchProduit/SearchProduit';
import ViewProduit from '../ViewProduit/ViewProduit';
import {useSelector} from 'react-redux';

function Produits(props) {
  return (
    <View style={ProduitsStylesheet.Produits} testID="Produits">
      <SearchProduit />
      <ProduitsScrollContainer />
      {props.current !== undefined && props.current !== null && <ViewProduit />}
      <ViewProduit />
    </View>
  );
}
// Produits.propTypes = {
//   produits: PropTypes.array.isRequired,
// };
// Produits.defaultProps = {
//   produits: [],
// };
export const unconnectedProduits = Produits;
export default props => {
  const current = useSelector(s => s.produits.currentProduit);
  return <Produits current={current} />;
};
