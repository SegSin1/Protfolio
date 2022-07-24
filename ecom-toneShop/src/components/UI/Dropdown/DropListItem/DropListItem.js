import classes from './DropListItem.module.css'

const DropListItem = ({ type, title, key, clickHandler }) => {
    return <li key={key} className={classes[`droplist-item`]} onClick={clickHandler}>
        {title}
    </li>
}

export default DropListItem