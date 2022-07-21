import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

const Products = (props) => {
  const navigate = useNavigate();
  const products = useSelector(state => state.products)
  const searchValue = useSelector(state => state.search.searchValue)

  const addNewItemHandler = () => { navigate('/addItem') }

  let filteredProducts = products && products
    .filter(el => el.title.toLowerCase().toString().includes(searchValue.toLowerCase()) ||
      el.description.toLowerCase().toString().includes(searchValue.toLowerCase()))
  return (
    <>
      <div className={classes['products-page-container']}>
        <div className={classes['product-filters-container']}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Dropdown className={classes['product-filter']} title={'Category'} options={[{title:'Guitars'},{title:'Amplifiers'},{title:'Profilers & Modulers'},{title:'Pedals'},{title:'Guitar Parts and Accessories'},{title:'Recording Gear'},{title:'Drums'},{title:'Other'}]}/>
            <Dropdown className={classes['product-filter']} type="" title={'Instrument'} options={[{title:'Electric Guitars'},{title:'Acoustic Guitars'},{title:'Bass Guitars'},{title:'Guitar Parts and Accessories'},{title:'Other'}]}/>
            <Dropdown className={classes['product-filter']} title={'Condition'} options={[{title:'Brand New'},{title:'Open box'},{title:'B-Stock'},{title:'Used-Mint'},{title:'Used-Excellent'},{title:'Used-Very Good'},{title:'Used-Good'},{title:'Used-Poor'},{title:'For Parts'}]}/>
            <Dropdown className={classes['product-filter']} title={'Brand'}  options={[{title:'Fender',relatedCategory:'Guitars'},{title:'Gibson',relatedCategory:'Guitars'},{title:'Epiphone',relatedCategory:'Guitars'},{title:'ESP',relatedCategory:'Guitars'},{title:'PRS',relatedCategory:'Guitars'},{title:'Ibanez',relatedCategory:'Guitars'},{title:'Martin'},{title:'Squire'},{title:'Taylor'},{title:'Gretsh'},{title:'Jackson'},{title:'Charvel'}]}/>
            <Dropdown className={classes['product-filter']} title={'Model'}  options={[{title:'Startocaster',relatedCategory:'Guitars',brand:'Fender'},{title:'Telecaster',relatedCategory:'Guitars',brand:'Fender'},{title:'Jazzmaster',relatedCategory:'Guitars',brand:'Fender'},{title:'Jaguar',relatedCategory:'Guitars',brand:'Fender'},{title:'Mustang',relatedCategory:'Guitars',brand:'Fender'},{title:'Jazzmaster',relatedCategory:'Guitars',brand:'Fender'},{title:'Jazzmaster',relatedCategory:'Guitars',brand:'Fender'},{title:'Jazzmaster',relatedCategory:'Guitars',brand:'Fender'},{title:'Jazzmaster',relatedCategory:'Guitars',brand:'Fender'},{title:'ESP',relatedCategory:'Guitars'},{title:'PRS',relatedCategory:'Guitars'},{title:'Ibanez',relatedCategory:'Guitars'}]}/>
            <Dropdown className={classes['product-filter']} title={'Item Rating'} />
            <Dropdown className={classes['product-filter']} title={'Item Location'} />
            <Dropdown className={classes['product-filter']} title={'Seller Rating'} />
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
