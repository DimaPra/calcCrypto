import { createSlice } from "@reduxjs/toolkit";

export const cryptoSlice = createSlice({
    name: 'cryptoes',
    initialState: {
        crypto: [],
        coin: {},
    },
    reducers: {
        saveCrypto: (state, action) => {
            state.crypto = action.payload
        },
        saveCoin: (state, action) => {
            state.coin = action.payload
        },
    }
})
export const { saveCrypto ,  saveCoin} = cryptoSlice.actions;

// Selectors 
export const selectCrypto = (store) => store.cryptoes.crypto;
export const selectCoin = (store) => store.cryptoes.coin;

