import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import { cartActions } from "./store/cart-slice";
// import { uiActions } from "./store/ui-slice.js";

let isInitial = true;

function App() {
  const isVisible = useSelector((state) => state.ui.isVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return; 
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart]);

  // useEffect(() => {
  //   async function getData() {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "sending...",
  //         message: "sending the data to the server",
  //       })
  //     );
  //     const response = await fetch("https://redux-14edc-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", { method: "PUT", body: JSON.stringify(cart) });

  //     if (!response.ok) {
  //       throw new Error("Failed fetched the data");
  //     }

  //     const resData = response.json();

  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "Success!!",
  //         message: "Data succesfully sent to the server",
  //       })
  //     );
  //   }

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   getData().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Data failed sent to the server",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);
  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
