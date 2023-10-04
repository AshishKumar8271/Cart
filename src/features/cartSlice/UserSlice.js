import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import data from "../../cart/data";
import axios from "axios";

const url = 'https://course-api.com/react-useReducer-cart-project';

export const fetchCart= createAsyncThunk('cart/fetchCart',async(name,thunkapi)=>{
    // return fetch(url).then((res)=>res.json()).catch((err)=>console.log(err));
    try{
        const res =await axios(url);
        return res.data;
    }
    catch(error){
       return thunkapi.rejectWithValue('Something went wrong');
    }
})


const initialState={
    cartData:[],
    amount:0,
    total:0,
    loading:false,
}

const UserSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartData=[];
        },

        removeItem:(state,action)=>{
            state.cartData=state.cartData.filter((ele)=>ele.id!==action.payload);
        },
        
        incAmount:(state,action)=>{
            state.cartData=state.cartData.map((ele)=>{
                if(ele.id===action.payload){
                    return {...ele,amount:ele.amount+1}
                }
                return ele;
            })
        },
        decAmount:(state,action)=>{
            state.cartData=state.cartData.map((ele)=>{
                if(ele.id===action.payload){
                    return {...ele,amount:ele.amount-1}
                }
                return ele;
            }).filter((ele)=>ele.amount!==0);
        },

        totalAmount:(state)=>{
            let amount =0;
            let total = 0;

            state.cartData.forEach((ele)=>{
                amount+=ele.amount;
                total+=ele.amount*ele.price;
            });
            state.amount=amount;
            state.total=total.toFixed(2);
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchCart.pending,(state)=>{
             state.loading=true;
        });
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            state.loading=false;
            state.cartData=action.payload;
        });
        builder.addCase(fetchCart.rejected,(state,action)=>{
            console.log(action);
            state.loading=false;
        })
    }
});


export default UserSlice.reducer;
export const {clearCart,removeItem,incAmount,decAmount,totalAmount} = UserSlice.actions;