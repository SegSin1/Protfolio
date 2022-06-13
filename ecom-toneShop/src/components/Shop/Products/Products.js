import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";

const Products = ({ products }) => {
  return (
    <ul className={classes["products-container"]}>
      {products && products.map((item) => <ProductItem product={item} key={item.id}/>)}
    </ul>
  );
};

export default Products;
