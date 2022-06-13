import Products from "./Products/Products";
import Promotions from "./Promotions/Promotions";
import AddItemForSale from "../Forms/AddItemForSaleForm/AddItemForSale";
import classes from "./Shop.module.css";

let MOCK_PRODUCTS = [
  {
    id: "a1",
    title: "Les Paul 59 Reissue",
    mainCategory:"Musical Instruments",
    secondayCategory:"Electric Guitars",
    brand: "Gibson",
    modal:"Les Paul",
    description: "Best Guitar Ever",
    color: "black",
    price: 3499,
    currency:"USD",
    availableQty: 2,
    images: [],
    type: "auction",
    offersEnabled: true,
    seller:{
      sellerUid:'b1',
      sellerAlias:'Yohoho',
      sellerShopEmail:'YohohoShop@gmail.com',
      sellerRank:'4.1',
      personalMessagesEnabled:false,
    }
  },
  {
    id: "a2",
    title: "Les Paul 59 Reissue",
    mainCategory:"Musical Instruments",
    secondayCategory:"Electric Guitars",
    brand: "Gibson",
    modal:"Les Paul",
    description: "Best Guitar Ever",
    color: "black",
    price: 3499,
    currency:"USD",
    availableQty: 2,
    images: [],
    type: "auction",
    offersEnabled: true,
    seller:{
      sellerUid:'b1',
      sellerAlias:'Yohoho',
      sellerShopEmail:'YohohoShop@gmail.com',
      sellerRank:'4.1',
      personalMessagesEnabled:false,
    }
  },
  {
    id: "a3",
    title: "Les Paul 59 Reissue",
    mainCategory:"Musical Instruments",
    secondayCategory:"Electric Guitars",
    brand: "Gibson",
    modal:"Les Paul",
    description: "Best Guitar Ever",
    color: "black",
    price: 3499,
    currency:"USD",
    availableQty: 2,
    images: [],
    type: "auction",
    offersEnabled: true,
    seller:{
      sellerUid:'b1',
      sellerAlias:'Yohoho',
      sellerShopEmail:'YohohoShop@gmail.com',
      sellerRank:'4.1',
      personalMessagesEnabled:false,
    }
  },
  {
    id: "a4",
    title: "Les Paul 59 Reissue",
    mainCategory:"Musical Instruments",
    secondayCategory:"Electric Guitars",
    brand: "Gibson",
    modal:"Les Paul",
    description: "Best Guitar Ever",
    color: "black",
    price: 3499,
    currency:"USD",
    availableQty: 2,
    images: [],
    type: "auction",
    offersEnabled: true,
    seller:{
      sellerUid:'b2',
      sellerAlias:'Yohoho',
      sellerShopEmail:'YohohoShop@gmail.com',
      sellerRank:'4.1',
      personalMessagesEnabled:false,
    }
  },
  {
    id: "a5",
    title: "Les Paul 59 Reissue",
    mainCategory:"Musical Instruments",
    secondayCategory:"Electric Guitars",
    brand: "Gibson",
    modal:"Les Paul",
    description: "Best Guitar Ever",
    color: "black",
    price: 3499,
    currency:"USD",
    availableQty: 2,
    images: [],
    type: "auction",
    offersEnabled: true,
    seller:{
      sellerUid:'b1',
      sellerAlias:'Yohoho',
      sellerShopEmail:'YohohoShop@gmail.com',
      sellerRank:'4.1',
      personalMessagesEnabled:false,
    }
  },
  {
    id: "a6",
    title: "Les Paul 59 Reissue",
    mainCategory:"Musical Instruments",
    secondayCategory:"Electric Guitars",
    brand: "Gibson",
    modal:"Les Paul",
    description: "Best Guitar Ever",
    color: "black",
    price: 3499,
    currency:"USD",
    availableQty: 2,
    images: [],
    type: "auction",
    offersEnabled: true,
    seller:{
      sellerUid:'b2',
      sellerAlias:'Yohoho',
      sellerShopEmail:'YohohoShop@gmail.com',
      sellerRank:'4.1',
      personalMessagesEnabled:false,
    }
  },
  {
    id: "a7",
    title: "Les Paul 59 Reissue",
    mainCategory:"Musical Instruments",
    secondayCategory:"Electric Guitars",
    brand: "Gibson",
    modal:"Les Paul",
    description: "Best Guitar Ever",
    color: "black",
    price: 3499,
    currency:"USD",
    availableQty: 2,
    images: [],
    type: "auction",
    offersEnabled: true,
    seller:{
      sellerUid:'b1',
      sellerAlias:'Yohoho',
      sellerShopEmail:'YohohoShop@gmail.com',
      sellerRank:'4.1',
      personalMessagesEnabled:false,
    }
  },
  {
    id: "a8",
    title: "Les Paul 59 Reissue",
    mainCategory:"Musical Instruments",
    secondayCategory:"Electric Guitars",
    brand: "Gibson",
    modal:"Les Paul",
    description: "Best Guitar Ever",
    color: "black",
    price: 3499,
    currency:"USD",
    availableQty: 2,
    images: [],
    type: "auction",
    offersEnabled: true,
    seller:{
      sellerUid:'b2',
      sellerAlias:'Yohoho',
      sellerShopEmail:'YohohoShop@gmail.com',
      sellerRank:'4.1',
      personalMessagesEnabled:false,
    }
  }
];

let MOCK_PROMOTIONS = [1, 2, 3, 4];

const Shop = () => {
  return (
    <div className={classes["shop-container"]}>
      {/* <AddItemForSale/> */}
      {/* <Promotions promotions={MOCK_PROMOTIONS} /> */}
      <Products products={MOCK_PRODUCTS} />
    </div>
  );
};

export default Shop;
