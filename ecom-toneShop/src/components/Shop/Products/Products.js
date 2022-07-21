import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

const Products = (props) => {
  const navigate = useNavigate();
  const products = useSelector(state => state.products)
  const searchValue = useSelector(state => state.search.searchValue)

  const addNewItemHandler = ()=>{navigate('/addItem')}

  let filteredProducts = products && products
    .filter(el => el.title.toLowerCase().toString().includes(searchValue.toLowerCase()) ||
      el.description.toLowerCase().toString().includes(searchValue.toLowerCase()))
  return (
    <>
    
      <div className={classes['products-page-container']}>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center',gap: '1rem' ,width:'100%',padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* <div>Category</div> */}
          <Dropdown/>
          <Dropdown/>
          <Dropdown/>
          <Dropdown/>
          <Dropdown/>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div>Sort By </div>
        </div>
        </div>

        {filteredProducts.length > 0 && <ul className={classes["products-items-container"]}>
          {filteredProducts.map((item) => <ProductItem product={item} key={item.id} />)}
        </ul>}
        {filteredProducts.length === 0 &&
          <div className={classes['no-products-container']}>
            <h1 className={classes['no-products-msg']}>Well that's disappointing...</h1>
            <button className='btn' onClick={addNewItemHandler}>Be the first to add this item</button>
          </div>
        }
      </div>
    </>
  );
};

export default Products;
