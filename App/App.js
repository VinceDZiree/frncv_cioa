import React, {useEffect, useState} from 'react';
import Produits from './components/Produits/Produits';
import Splash from './components/Splash/Splash';
import {store} from './store/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {fetchProduits} from './store/produits.reducer';
import {Text, View} from 'react-native';

function App(props) {
  console.log(store);

  const [screen, setscreen] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.produits.loading);
  // const [produits, setproduits] = useState([]);
  useSelector(state => state.produits.loading);

  useEffect(() => {
    setscreen(<Splash />);
    dispatch(fetchProduits());
  }, []);

  useEffect(() => {
    if (isLoading === 'succeeded') {
      setscreen(<Produits />);
    }
    if (isLoading === 'failed') {
      setscreen(
        <View>
          <Text>Error loading datas</Text>
        </View>,
      );
    }
  }, [isLoading]);

  return screen;
}
export default props => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};
