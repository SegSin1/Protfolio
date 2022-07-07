import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Products = (props) => {
  const products = useSelector(state => state.products)
  return (
    <ul className={classes["products-container"]}>
      {products && products.map((item) => <ProductItem product={item} key={item.id} />)}
    </ul>
  );
};

export default Products;
