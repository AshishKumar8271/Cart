import {createSlice} from "@reduxjs/toolkit";

const initialState={
    isOpen:false,
}
const ModalSlice = createSlice({
    name:"Modal",
    initialState:initialState,
    reducers:{
        openModal:(state,action)=>{
            state.isOpen=true;
        },

        closeModal:(state,action)=>{
            state.isOpen=false;
        },
    },
});

export default ModalSlice.reducer;

export const {openModal,closeModal} = ModalSlice.actions;