import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Products</button>
      </p>
    </>
  );
};

export default Home;
