import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./features/cartSlice/UserSlice";
import ModalSlice from "./ModalFeatures/ModalSlice/ModalSlice";

const store = configureStore({
    reducer:{
        cart:UserSlice,
        modal:ModalSlice,
    },
});

export default store;