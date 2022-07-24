import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { filtersSliceActions } from '../../../store/slices/filters-slice'

const Products = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const searchValue = useSelector(state => state.search.searchValue)
  const activeFilters = useSelector(state => state.filters)
  const addNewItemHandler = () => { navigate('/addItem') }
  // let categoryFilters = Array.from(new Set(products.map(el=>el.secondaryCategory))).map(el=>{return {title:el}})
  let filteredProducts = products && products
    .filter(el => (el.title.toLowerCase().toString().includes(searchValue.toLowerCase()) ||
      el.description.toLowerCase().toString().includes(searchValue.toLowerCase()))
      && (activeFilters.category.val !== '' ? el.mainCategory === activeFilters.category.val : true)
      && (activeFilters.instrument.val !== '' ? el.secondaryCategory === activeFilters.instrument.val : true)
      && (activeFilters.condition.val !== '' ? el.secondaryCategory === activeFilters.condition.val : true)
    )
  return (
    <>
      <div className={classes['products-page-container']}>
        <div className={classes['product-filters-container']}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.category.title}
              activeSelection={activeFilters.category.val}
              options={activeFilters.category.options}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.category.title, val: value }))}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.instrument.title}
              activeSelection={activeFilters.instrument.val}
              options={activeFilters.instrument.options}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.instrument.title, val: value }))}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.condition.title}
              activeSelection={activeFilters.condition.val}
              options={activeFilters.condition.options}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.condition.title, val: value }))}
            />
            <Dropdown 
              className={classes['product-filter']} 
              title={activeFilters.brand.title} 
              options={activeFilters.brand.options} 
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.brand.title, val: value }))}
            />
            <Dropdown className={classes['product-filter']} title={activeFilters.model.title} options={activeFilters.model.options} />
            <Dropdown className={classes['product-filter']} title={'Price'} />
            <Dropdown className={classes['product-filter']} title={'Item Location'} />
            <Dropdown className={classes['product-filter']} title={'More Filters'} />
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
