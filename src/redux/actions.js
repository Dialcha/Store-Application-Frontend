import {
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    GET_USER_PENDING,
    GET_HISTORY_PENDING,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAILED,
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_PENDING,
    REDEEM_POINTS_FAILED,
    REDEEM_POINTS_SUCCESS,
    REDEEM_POINTS_PENDING,
    ADD_POINTS_FAILED,
    ADD_POINTS_SUCCESS,
    ADD_POINTS_PENDING,
    ORDER_PRODUCTS
  } from "./actionTypes";

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk`,
    "Access-Control-Allow-Origin": "*",
};

///////////////////
// API CALLS
///////////////////

  const fetchProducts = () => {
    return fetch('https://coding-challenge-api.aerolab.co/user/history', {
      method: 'get',
      headers,
    });
  };

  const redeemPoints = (id) => {
    return fetch('https://coding-challenge-api.aerolab.co/redeem', {
      method: 'post',
      headers,
      body: JSON.stringify({ productId: id }),
    });
  };

  const fetchProfile = () => {
    return fetch('https://coding-challenge-api.aerolab.co/user/me', {
      method: 'get',
      headers,
    });
  };

  const fetchHistory = () => {
    return fetch('https://coding-challenge-api.aerolab.co/user/history', {
      method: 'get',
      headers,
    });
  };

  const addPoints = (amount) => {
    return fetch('https://coding-challenge-api.aerolab.co/user/points', {
      method: 'post',
      headers,
      body: JSON.stringify({ amount }),
    });
  };

  ///////////
  // Actions
  ///////////
  
  export const getUser = () => {
    return async (dispatch) => {
      dispatch({
        type: GET_USER_PENDING,
      });
  
      const res = await fetchProfile();
      const result = await res.json();
  
      try {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: result,
          loading: false,
        });
      } catch (error) {
        dispatch({
          type: GET_USER_FAILED,
          error: error,
          loading: false,
        });
      }
    };
  };
  
  export const getHistory = () => {
    return async (dispatch) => {
      dispatch({
        type: GET_HISTORY_PENDING,
      });
  
      const res = await fetchHistory();
      const result = await res.json();
  
      try {
        dispatch({
          type: GET_HISTORY_SUCCESS,
          payload: result,
          loading: false,
        });
      } catch (error) {
        dispatch({
          type: GET_HISTORY_FAILED,
          error: error,
          loading: false,
        });
      }
    };
  };
  
  export const getProducts = () => {
    return async (dispatch) => {
      dispatch({
        type: GET_PRODUCTS_PENDING,
      });
  
      const res = await fetchProducts();
      const result = await res.json();
  
      try {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: result,
          loading: false,
        });
      } catch (error) {
        dispatch({
          type: GET_PRODUCTS_FAILED,
          error: error,
          loading: false,
        });
      }
    };
  };
  
  export const redeemUserPoints = (id) => {
    return async (dispatch) => {
      dispatch({
        type: REDEEM_POINTS_PENDING,
      });
  
      const res = await redeemPoints(id);
      const result = await res.json();
  
      try {
        dispatch({
          type: REDEEM_POINTS_SUCCESS,
          message: result,
          loading: false,
        });
      } catch (error) {
        dispatch({
          type: REDEEM_POINTS_FAILED,
          error: error,
          message: result,
          loading: false,
        });
      }
    };
  };
  
  export const addUserPoints = (amount) => {
    return async (dispatch) => {
      dispatch({
        type: ADD_POINTS_PENDING,
      });
  
      const res = await addPoints(amount);
      const result = await res.json();
  
      try {
        dispatch({
          type: ADD_POINTS_SUCCESS,
          message: result,
          loading: false,
        });
      } catch (error) {
        dispatch({
          type: ADD_POINTS_FAILED,
          error: error,
          message: result,
          loading: false,
        });
      }
    };
  };
  
  export const sortProductsByPrice = (product, sort) => {
    return (dispatch) => {
      const products = product.products;
      console.log(product.products, sort);
      if (sort !== "") {
        products.sort((a, b) => sort === "lowestprice" ? a.cost > b.cost ? 1 : -1
        : sort === "highestprice" ? a.cost < b.cost ? 1 : -1 : sort === "category"
       ? a.category > b.category ? 1 : -1 : products
        );
      }
  
      dispatch({
        type: ORDER_PRODUCTS,
        payload: products,
        sort: sort,
      });
    };
  };
  