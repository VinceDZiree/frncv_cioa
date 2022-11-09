import {createStore} from 'redux';
const initialState = {
  produits: [],
};

export default function produitReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'addProduit':
      return {...state, produits: [...state.produits, payload]};

    default:
      return state;
  }
}
// let state = produitReducer(undefined, {type: '@@redux/INIT'});
// state = produitReducer(state, {type: 'addProduits', payload: {}});
// state = produitReducer(state, {type: 'addProduits', payload: {}});

// export const store = createStore(produitReducer);
// store.subscribe(() => {
//   console.trace(store.getState());
// });

// store.dispatch({type: 'addProduit', payload: {id: 1}});
// store.dispatch({type: 'addProduit', payload: {id: 2}});
// store.dispatch({type: 'addProduit', payload: {id: 3}});
// store.dispatch({type: 'addProduit', payload: {id: 4}});
// store.dispatch({type: 'addProduit', payload: {id: 5}});
