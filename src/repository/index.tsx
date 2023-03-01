import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cryptoSlice } from "../modules/entities/crypto/cryptoSlice";

const reducer = combineReducers({
    cryptoes:cryptoSlice.reducer
})

export const store = configureStore({ reducer });