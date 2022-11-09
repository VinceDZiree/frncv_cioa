import React, {useState, useEffect} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import SearchProduitStylesheet from './SearchProduit.styles';
import {filterProduits} from '../../store/produits.reducer';

function SearchProduit(props) {
  const [searchStr, setsearchStr] = useState('');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(filterProduits(searchStr));
  //   props.onSearch
  // }, [searchStr]);

  return (
    <View style={SearchProduitStylesheet.SearchProduit} testID="SearchProduit">
      <TextInput
        placeholder="recherche"
        // value={searchStr}
        onChangeText={value => {
          // setsearchStr(value);
          props.onSearch(value);
        }}
      />
    </View>
  );
}
export const UnconnectedSearchProduit = SearchProduit;
export default (props) => {
  const disp = useDispatch();
  return <SearchProduit onSearch={str => disp(filterProduits(str))} />;
};
