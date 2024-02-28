import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer.ts";
import { State, CartItem, CartActions, ContextProviderType } from "./@types/CartTypes.ts";

const url: string = "https://course-api.com/react-useReducer-cart-project";
const CartContext = createContext<ContextProviderType | null>(null);

const initialState: State = {
  cartItems: [],
  totalPrice: 0,
  loading: true,
  totalAmt: 0,
  modal: false,
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    getTotal();
  },[state.cartItems])

  const fetchData = async () => {
    try {
      Loaded();
      const res = await fetch(url);
      const data: CartItem[] = await res.json();
      dispatch({ type: CartActions.DISPLAY_ITEMS, payload: data });
    } catch (error) {
      console.log("Failed to fetch");
    }
  };

  const Loaded = () => {
    dispatch({ type: CartActions.LOADING });
  };

  const removeItem = (id: string) => {
    dispatch({type: CartActions.REMOVE_ITEM, payload: id});
  }
  
  const IncAmount = (id: string) => {
    dispatch({type: CartActions.INCREASE_AMT, payload: id});
  }

  const DecAmount = (id: string) => {
    dispatch({type: CartActions.DECREASE_AMT, payload: id});
  }

  const getTotal = () => {
    dispatch({type:CartActions.TOTAL_AMT_PRICE})
  }
  
  const clearCart = () => {
    dispatch({type:CartActions.CLEAR_CART});
  }

  const Confirm = () => {
    dispatch({type:CartActions.CONFIRM});
  }

  const Cancel = () => {
    dispatch({type:CartActions.CANCEL});
  }

  return (
    <CartContext.Provider value={{ ...state,removeItem, IncAmount, DecAmount,clearCart,Confirm,Cancel }}>{children}</CartContext.Provider>
  );
};

export const UseGlobalHook = () => {
  return useContext(CartContext) as ContextProviderType;
};
