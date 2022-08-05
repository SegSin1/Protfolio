import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.css";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
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

  const existingOptionsCounter = {
    category: filteredProducts.map(el => el.mainCategory).reduce((prev, curr) => { prev[curr] = (prev[curr] || 0) + 1; return prev }, {}),
    instrument: filteredProducts.map(el => el.secondaryCategory).reduce((prev, curr) => { prev[curr] = (prev[curr] || 0) + 1; return prev }, {}),
    condition: filteredProducts.map(el => el.condition).reduce((prev, curr) => { prev[curr] = (prev[curr] || 0) + 1; return prev }, {}),
    brand: filteredProducts.map(el => el.brand).reduce((prev, curr) => { prev[curr] = (prev[curr] || 0) + 1; return prev }, {}),
    model: filteredProducts.map(el => el.model).reduce((prev, curr) => { prev[curr] = (prev[curr] || 0) + 1; return prev }, {}),
  }

  const existingOptions = {}
  for (const item of Object.keys(existingOptionsCounter)) {
    existingOptions[item] = []
    for (const option of Object.keys(existingOptionsCounter[item])) {
      existingOptions[item].push({ title: option, count: existingOptionsCounter[item][option] })
    }
  }

  return (
    <>
      <div className={classes['products-page-container']}>
        <div className={classes['product-filters-container']}>
          <div className={classes['product-filters']}>
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.category.title}
              activeSelection={activeFilters.category.val}
              avaliableOptions={existingOptions.category}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.category.title, val: value }))}
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.category.title, val: 'all' }))}
              showEmptyItems={false}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.instrument.title}
              activeSelection={activeFilters.instrument.val}
              avaliableOptions={existingOptions.instrument}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.instrument.title, val: value }))}
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.instrument.title, val: 'all' }))}
              showEmptyItems={false}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.condition.title}
              activeSelection={activeFilters.condition.val}
              avaliableOptions={existingOptions.condition}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.condition.title, val: value }))}
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.condition.title, val: 'all' }))}
              showEmptyItems={false}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.brand.title}
              activeSelection={activeFilters.brand.val}
              avaliableOptions={existingOptions.brand}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.brand.title, val: value }))}
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.brand.title, val: 'all' }))}
              showEmptyItems={false}
            />
            <Dropdown
              className={classes['product-filter']}
              title={activeFilters.model.title}
              activeSelection={activeFilters.model.val}
              avaliableOptions={existingOptions.model}
              clickHandler={(value) => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.model.title, val: value }))}
              resetHandler={() => dispatch(filtersSliceActions.setActiveFilter({ type: activeFilters.model.title, val: 'all' }))}
              showEmptyItems={false}
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
