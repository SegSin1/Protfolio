import classes from './DropListItem.module.css'

const DropListItem = ({ type, title }) => {
    return <li className={classes[`droplist-item-${type}`]}>
        {title}
    </li>
}

export default DropListItem