import Products from "./Products/Products";
import Promotions from "./Promotions/Promotions";
import AddItemForSale from "../Forms/AddItemForSaleForm/AddItemForSale";
import classes from "./Shop.module.css";

let MOCK_PRODUCTS = [
  {
    id: "a1",
    title: "Les Paul 59 Reissue",
    description: "Best Guitar Ever",
    color: "black",
    price: 3499,
    brand: "Gibson",
    availableQty: 2,
    images: [],
    type: "auction",
    offersEnabled: true,
  },
  {
    id: "a2",
    title: "Les Paul Standard",
    description: "Best Guitar Ever",
    color: "black",
    price: 1499,
    brand: "Gibson",
    availableQty: 1,
    images: [],
    offersEnabled: true,
    type: "sale",
  },
  {
    id: "a3",
    title: "Les Paul Classic",
    description: "Best Guitar Ever",
    price: 3499,
    color: "black",
    brand: "Gibson",
    availableQty: 2,
    images: [],
    offersEnabled: true,
    type: "sale",
  },
  {
    id: "a4",
    title: "Les Paul Standard",
    description: "Best Guitar Ever",
    price: 1499,
    color: "black",
    brand: "Gibson",
    availableQty: 1,
    images: [],
    offersEnabled: true,
    type: "auction",
  },
  {
    id: "a5",
    title: "Les Paul 59 Reissue",
    description: "Best Guitar Ever",
    price: 3499,
    color: "black",
    brand: "Gibson",
    availableQty: 2,
    images: [],
    offersEnabled: true,
    type: "auction",
  },
  {
    id: "a6",
    title: "Les Paul Standard",
    description: "Best Guitar Ever",
    color: "black",
    price: 1499,
    brand: "Gibson",
    availableQty: 1,
    images: [],
    offersEnabled: true,
    type: "auction",
  },
];
let MOCK_PROMOTIONS = [1, 2, 3, 4];

const Shop = () => {
  return (
    <div className={classes["shop-container"]}>
      <AddItemForSale/>
      {/* <Promotions promotions={MOCK_PROMOTIONS} /> */}
      <Products products={MOCK_PRODUCTS} />
    </div>
  );
};

export default Shop;
