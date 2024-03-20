import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { contadorReducer } from "./contador/contador.reducer";
import { incrementadorAction } from "./contador/contador.actions";

const store: Store = configureStore({
    reducer: contadorReducer
});

store.subscribe( () => {
    console.log('Subs', store.getState());
})

store.dispatch(incrementadorAction);