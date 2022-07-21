import classes from './DropListItem.module.css'

const DropListItem = ({ type }) => {
    return <li className={classes[`droplist-item-${type}`]}>
        DropListItem
    </li>
}

export default DropListItem