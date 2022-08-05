import classes from './DropListItem.module.css'

const DropListItem = ({ type, title, count, key, clickHandler, showEmptyItems }) => {
    return <li key={key} className={classes[`droplist-item`]} onClick={clickHandler}>
        {showEmptyItems ? `${title} (${count})` : count > 0 && `${title} (${count})`}
    </li>
}

export default DropListItem