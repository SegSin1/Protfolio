import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";
import { BiChevronRight } from 'react-icons/bi'

const Products = (props) => {
  const products = useSelector(state => state.products)
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <div style={{ color: '#555', fontWeight: 600, fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>Music Instruments <BiChevronRight size={30} /> Electric Guitars</div>
        <ul className={classes["products-container"]}>
          {products && products.map((item) => <ProductItem product={item} key={item.id} />)}
        </ul>
      </div>
    </>
  );
};

export default Products;
