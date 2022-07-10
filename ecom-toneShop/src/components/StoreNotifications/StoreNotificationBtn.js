import {FiBell} from 'react-icons/fi'
import classes from './StoreNotificationBtn.module.css'
import {useNavigate} from 'react-router-dom'

const StoreNotificationBtn = ()=>{
    const navigate = useNavigate();
    const showNotificationsHandler = ()=>{
        navigate('/notifications')
    }
    return (<button className={classes['notifications-btn']} onClick={showNotificationsHandler}>
        <FiBell size={25}/>
        <span className={classes.badge}>8</span>
    </button>)
}

export default StoreNotificationBtn;