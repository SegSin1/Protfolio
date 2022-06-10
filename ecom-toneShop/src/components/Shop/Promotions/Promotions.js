import PromotionItem from "./PromotionItem/PromotionItem";
import classes from './Promotions.module.css'

const Promotions = ({ promotions }) => {
  return <ul className={classes['promotions-container']}>{promotions && promotions.map((item) => <PromotionItem />)}</ul>;
};

export default Promotions;
