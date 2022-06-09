import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";

const Products = ({ products }) => {
  return (
    <ul className={classes["products-container"]}>
      {products && products.map((item) => <ProductItem />)}
    </ul>
  );
};

export default Products;
