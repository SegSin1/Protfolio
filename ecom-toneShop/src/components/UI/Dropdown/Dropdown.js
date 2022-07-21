import classes from './Dropdown.module.css'
import DropListItem from './DropListItem/DropListItem'
const Dropdown = ({ title='notitle', type='list', options=[] }) => {
    return (
        <>
            <div className={classes[`droplist-container-${type}`]}>{title}</div>
            <ul className={classes[`droplist-container-${type}`]}>
                {options.map(el => <DropListItem title={el.title} type={type} />)}
            </ul>
        </>
    )
}
export default Dropdown;