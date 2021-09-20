import {getProducts, getCart} from "../../Services/Product"

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const INIT_CART ="INIT_CART";
export const ADD_PRODUCT ="ADD_PRODUCT";
export const REMOVE_PRODUCT="REMOVE_PRODUCT";

export const initializeState = () =>{
    return async (dispatch) =>{
        const products = await getProducts();
        dispatch({
            type: INIT_PRODUCTS,
            payload: products,
        });
    };
};

export const addProduct = (product) =>{
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT,
            payload: product,
        });
    };
};


export const removeProduct = (productId) =>{
    return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT,
            payload: productId,
        });
    };
};
