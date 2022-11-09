import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {ScrollView, Text, View} from 'react-native';
import ProduitsScrollContainerStylesheet from './ProduitsScrollContainer.styles';
import I_Produit from '../../interfaces/produit';
import ProduitThumbnail from '../ProduitThumbnail/ProduitThumbnail';
import {selectCurrent} from '../../store/produits.reducer';

interface I_ProduitScrollContainerProps {
  produits: Array<I_Produit>;
  onPressProduit: Function;
}

const ProduitsScrollContainer: React.FunctionComponent<
  I_ProduitScrollContainerProps
> = props => {
  return (
    <ScrollView
      style={ProduitsScrollContainerStylesheet.ProduitsScrollContainer}>
      <View style={ProduitsScrollContainerStylesheet.mainView}>
        {props.produits.map((e, i) => (
          <ProduitThumbnail key={`produit${i}`} {...e} />
        ))}
      </View>
    </ScrollView>
  );
};

function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    produits: state.produits.produits,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    onPressProduit: (id: number) => dispatch(selectCurrent(id)),
  };
}
export const storeMappedProduitsScrollContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProduitsScrollContainer);

export const unconnectedProduitScrollContainer = ProduitsScrollContainer;

export default () => {
  const produits = useSelector((state: any) => state.produits.produits);
  const dispatch = useDispatch();
  return (
    <ProduitsScrollContainer
      produits={produits}
      onPressProduit={(id: number) => dispatch(selectCurrent(id))}
    />
  );
};
