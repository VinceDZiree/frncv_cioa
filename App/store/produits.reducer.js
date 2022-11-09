import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {produits} from '../../db/db.json';

export const initialState = {
  fullListProduits: [],
  produits: produits,
  currentProduit: null,
  loading: 'idle',
};

const produitSlice = createSlice({
  name: 'produits',
  initialState,
  reducers: {
    addProduit: (state, action) => {
      state.produits.push(action.payload);
    },
    addProduits: (state, action) => {
      state.produits = action.payload.produits;
    },
    selectCurrent: (state, action) => {
      state.currentProduit = state.produits.find(
        e => e.id === action.payload.id,
      );
    },
    clearSelection: state => {
      state.currentProduit = null;
    },
    filterProduits: (state, action) => {
      let search = action.payload;

      if (search.length > 0) {
        state.produits = state.fullListProduits.filter(e =>
          e.nom.includes(search),
        );
      } else {
        state.produits = state.fullListProduits;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProduits.fulfilled, (state, payload) => {
      state.fullListProduits = payload.payload;
      state.produits = state.fullListProduits;
      state.loading = 'succeeded';
    });
    builder.addMatcher(
      action =>
        action.type.includes('produit/fetch') &&
        !action.type.includes('fulfilled'),
      (state, payload) => {
        console.log(payload);
        state.produits = [];
        state.fullListProduits = [];
      },
    );
  },
});

export const fetchProduits = createAsyncThunk('produits/fetch', async () => {
  const result = await fetch(
    'https://my-json-server.typicode.com/champix56/frncv1-2022-11-07/produits',
  );
  return result.json();
});

export const {
  addProduit,
  addProduits,
  selectCurrent,
  filterProduits,
  clearSelection,
} = produitSlice.actions;

export default produitSlice.reducer;
