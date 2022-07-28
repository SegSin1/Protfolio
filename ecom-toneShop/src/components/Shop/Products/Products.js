import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { filtersSliceActions } from '../../../store/slices/filters-slice'
import { filtersState } from '../../../store/slices/filters-slice'
import { productsState } from '../../../store/slices/products-slice'
import { searchState } from '../../../store/slices/search-slice'

const Products = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(productsState)
  const search = useSelector(searchState)
  const activeFilters = useSelector(filtersState)
  const addNewItemHandler = () => { navigate('/addItem') }
  // let categoryFilters = Array.from(new Set(products.map(el=>el.secondaryCategory))).map(el=>{return {title:el}})
  let filteredProducts = products && products
    .filter(el => (el.title.toLowerCase().toString().includes(search.searchValue.toLowerCase())
      || el.description.toLowerCase().toString().includes(search.searchValue.toLowerCase())
      || el.secondaryCategory.toLowerCase().toString().includes(search.searchValue.toLowerCase())
      || el.mainCategory.toLowerCase().toString().includes(search.searchValue.toLowerCase()))
      && (activeFilters.category.val !== '' ? el.mainCategory === activeFilters.category.val : true)
      && (activeFilters.instrument.val !== '' ? el.secondaryCategory === activeFilters.instrument.val : true)
      && (activeFilters.condition.val !== '' ? el.condition === activeFilters.condition.val : true)
      && (activeFilters.brand.val !== '' ? el.brand === activeFilters.brand.val : true)
      && (activeFilters.model.val !== '' ? el.model === activeFilters.model.val : true)
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
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.category.title, val: 'all' }))}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.instrument.title}
              activeSelection={activeFilters.instrument.val}
              options={activeFilters.category.val !== '' ? activeFilters.instrument.options.filter(el => el.category && (el.category.toLowerCase() === activeFilters.category.val.toLowerCase() || el.category === 'All')) : activeFilters.instrument.options}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.instrument.title, val: value }))}
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.instrument.title, val: 'all' }))}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.condition.title}
              activeSelection={activeFilters.condition.val}
              options={activeFilters.condition.options}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.condition.title, val: value }))}
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.condition.title, val: 'all' }))}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.brand.title}
              options={activeFilters.brand.options}
              activeSelection={activeFilters.brand.val}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.brand.title, val: value }))}
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.brand.title, val: 'all' }))}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.model.title}
              options={activeFilters.model.options}
              activeSelection={activeFilters.model.val}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.model.title, val: value }))}
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.model.title, val: 'all' }))}
            />
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
