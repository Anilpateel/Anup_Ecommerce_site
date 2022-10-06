import axios from "axios";

import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/orderConstants";
axios.defaults.headers.get["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

axios.defaults.headers.post["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_URL}/api/order/neworder`,
      order,
      config
    );

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get curretly logged in user orders
export const myOrders = () => async (dispatch) => {
  try {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    dispatch({ type: MY_ORDERS_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/api/orders/me`
    );

    dispatch({
      type: MY_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get order details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/api/order/${id}`
    );

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get all orders - ADMIN
export const allOrders = () => async (dispatch) => {
  try {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    dispatch({ type: ALL_ORDERS_REQUEST });

    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/api/admin/orders`
    );

    dispatch({
      type: ALL_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// update order
export const updateOrder = (id, orderData) => async (dispatch) => {
  try {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios.defaults.headers.put[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    dispatch({ type: UPDATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_URL}/api/admin/order/${id}`,
      orderData,
      config
    );

    dispatch({
      type: UPDATE_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    axios.defaults.headers.get[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

    axios.defaults.headers.delete[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    dispatch({ type: DELETE_ORDER_REQUEST });

    const { data } = await axios.delete(
      `${process.env.REACT_APP_URL}/api/admin/order/${id}`
    );

    dispatch({
      type: DELETE_ORDER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
