import { CartItem, State } from "./@types/CartTypes";
import { ActionTypes } from "./@types/CartTypes";

export const reducer = (state:State,action:ActionTypes): State => {
    if(action.type == "LOADING") {
        state.loading = true;
        return state;
    }

    if(action.type === "DISPLAY_ITEMS") {
        return {
            ...state,cartItems:action.payload as CartItem[],loading: false
        }
    }

    if(action.type === "REMOVE_ITEM") {
        const FilterdItems:CartItem[] = state.cartItems.filter((ele) => ele.id != action.payload)
        return {
            ...state,cartItems:FilterdItems
        }
    }

    if(action.type === 'INCREASE_AMT') {
        const increaseAmt = state.cartItems.map((ele) => {
            if(ele.id == action.payload) {
               return{...ele, amount: ele.amount + 1}
            }
            return ele;
        })
        return{
            ...state,cartItems: increaseAmt,
        }
    }

    if(action.type === "DECREASE_AMT") {
        const decreaseAmt = state.cartItems.map((ele) => {
            if(ele.id === action.payload) {
                return {...ele,amount: ele.amount - 1};
            };

            return ele;
        }).filter((ele) => ele.amount > 0);

        return {
            ...state,cartItems: decreaseAmt
        };
    }

    if(action.type === "TOTAL_AMT_PRICE") {
        let {totalAmt,totalPrice} = state.cartItems.reduce((ele,curEle) => {
            const {price,amount} = curEle;
            const itemPrice = amount * price;
            ele.totalPrice+=itemPrice;
            ele.totalAmt+=amount;
            return ele;
        }, {
            totalAmt: 0,
            totalPrice: 0,
        });

        totalPrice = parseFloat(totalPrice.toFixed(2));

        return {
            ...state,totalAmt,totalPrice
        }
    }

    if(action.type === "CLEAR_CART") {
        return {
            ...state,modal:true,
        }
    }

    if(action.type === "CONFIRM") {
        return {
            ...state,cartItems:[],modal:false,
        }
    }

    if(action.type === "CANCEL") {
        console.log("hello");
        return {
            ...state,modal:false,
        }
    }


    return state;
}