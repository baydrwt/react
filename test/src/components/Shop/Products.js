import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS_DUMMY = [
  {
    id: "p1",
    name: "Book 1",
    price: 6,
    description: "Lorem ipusm dolor sit amet",
  },
  {
    id: "p2",
    name: "Book 2",
    price: 10,
    description: "Lorem ipusm dolor sit amet inscuptre",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS_DUMMY.map((product) => {
          return <ProductItem key={product.id} id={product.id} name={product.name} price={product.price} description={product.description} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
