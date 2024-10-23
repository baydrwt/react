import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth.isAuth);
  return (
    <>
      <Header />
      {auth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
