import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export function fetchCartData() {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch("https://redux-14edc-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");

      if (!response.ok) {
        throw new Error("Failed fetch the cart");
      }

      const data = response.json();

      return data;
    }

    try {
      const data = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Data fetched failed",
        })
      );
    }
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending the data to the server",
      })
    );

    async function sendRequest() {
      const response = await fetch("https://redux-14edc-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", { method: "PUT", body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }) });

      if (!response.ok) {
        throw new Error("Failed fetched the data");
      }

      const resData = response.json();
    }

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!",
          message: "Data succesfully sent to the server",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Data failed sent to the server",
        })
      );
    }
  };
}
