
// Interface for Single Item
export interface CartItem {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
}

//Interface for the State
export interface State {
  cartItems: CartItem[];
  totalPrice: number;
  totalAmt: number;
  loading: boolean;
  modal: boolean;
}


export enum CartActions {
    LOADING = 'LOADING',
    DISPLAY_ITEMS = 'DISPLAY_ITEMS',
    REMOVE_ITEM = 'REMOVE_ITEM',
    INCREASE_AMT = 'INCREASE_AMT',
    DECREASE_AMT = 'DECREASE_AMT',
    TOTAL_AMT_PRICE = 'TOTAL_AMT_PRICE',
    CLEAR_CART = 'CLEAR_CART',
    CONFIRM = 'CONFIRM',
    CANCEL = 'CANCEL',
}

// Type for dispatch actions
export type ActionTypes = {
  type: CartActions;
  payload?: string | CartItem[];
};


//Inteface for the AppContextProvider
export interface ContextProviderType extends State {
    removeItem : (id: string) => void;
    IncAmount: (id: string) => void;
    DecAmount: (id: string) => void;
    clearCart: () => void;
    Confirm: () => void;
    Cancel: () => void;
}
