import classes from "./ProductItem.module.css";
import productImgA from "../../../../assets/IMG_3233.jpg";
import productImgB from "../../../../assets/IMG_6037.jpg";
import productImgC from "../../../../assets/IMG_1948-1.jpg";
import productImgD from "../../../../assets/IMG_5901.jpg";

const ProductItem = () => {
  return (
    <>
      <li className={classes["product-container"]}>
        <div className={classes.img}>
          <img src={productImgA} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <div className={classes.details}>
            <div className={classes["main-details"]}>
              <div className={classes.title}>Gibson Les Paul</div>
              <div className={classes.price}>$2999.99</div>
            </div>
            <div>Lorem Lorem LoremLorem Lorem Lorem LoremLoremLoremLorem</div>
            <button className={classes.btn}>Add</button>
          </div>
        </div>
      </li>
      <li className={classes["product-container"]}>
        <div className={classes.img}>
          <img src={productImgB} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <div className={classes.details}>
            <div className={classes["main-details"]}>
              <div className={classes.title}>Gibson Les Paul</div>
              <div className={classes.price}>$1499.99</div>
            </div>
            <div>Lorem Lorem LoremLorem Lorem Lorem LoremLoremLoremLorem</div>
            <button className={classes.btn}>Add</button>
          </div>
        </div>
      </li>
      <li className={classes["product-container"]}>
        <div className={classes.img}>
          <img src={productImgB} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <div className={classes.details}>
            <div className={classes["main-details"]}>
              <div className={classes.title}>Gibson Les Paul</div>
              <div className={classes.price}>$1499.99</div>
            </div>
            <div>Lorem Lorem LoremLorem Lorem Lorem LoremLoremLoremLorem</div>
            <button className={classes.btn}>Add</button>
          </div>
        </div>
      </li>
      <li className={classes["product-container"]}>
        <div className={classes.img}>
          <img src={productImgC} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <div className={classes.details}>
            <div className={classes["main-details"]}>
              <div className={classes.title}>Gibson Les Paul</div>
              <div className={classes.price}>$1499.99</div>
            </div>
            <div>Lorem Lorem LoremLorem Lorem Lorem LoremLoremLoremLorem</div>
            <button className={classes.btn}>Add</button>
          </div>
        </div>
      </li>
      <li className={classes["product-container"]}>
        <div className={classes.img}>
          <img src={productImgD} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <div className={classes.details}>
            <div className={classes["main-details"]}>
              <div className={classes.title}>Gibson Les Paul</div>
              <div className={classes.price}>$1499.99</div>
            </div>
            <div>Lorem Lorem LoremLorem Lorem Lorem LoremLoremLoremLorem</div>
            <button className={classes.btn}>Add</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductItem;
