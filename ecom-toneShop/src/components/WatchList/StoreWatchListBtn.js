import classes from './StoreWatchListBtn.module.css'
import { GiTargeted } from "react-icons/gi";
import { useNavigate } from 'react-router-dom'
const StoreWatchListBtn = () => {
    const navigate = useNavigate();
    const showWatchlistHandler = () => {
        navigate('/watchlist')
    }
    return <button className={classes["watchlist-btn"]} onClick={showWatchlistHandler}>
        <GiTargeted size={25} />
        <span className={classes.badge}>{5}</span>
    </button>
}

export default StoreWatchListBtn;