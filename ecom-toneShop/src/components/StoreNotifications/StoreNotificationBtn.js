import {FiBell} from 'react-icons/fi'
import classes from './StoreNotificationBtn.module.css'

const StoreNotificationBtn = ()=>{
    return (<button className={classes['notifications-btn']}>
        <FiBell size={25}/>
        <span className={classes.badge}>8</span>
    </button>)
}

export default StoreNotificationBtn;