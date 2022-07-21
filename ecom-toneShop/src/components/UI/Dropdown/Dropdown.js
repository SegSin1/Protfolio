import classes from './Dropdown.module.css'
import DropListItem from './DropListItem/DropListItem'
const Dropdown = ({ 
    title='notitle', 
    type='list', 
    options=[] ,
    className=''
}) => {
    return (
        <div className={classes[`droplist-container`]}>
            <div className={className}>{title}</div>
            <ul className={classes[`droplist-options-container`]}>
                <h1>{title}</h1>
                {options.map(el => <DropListItem title={el.title} type={type} />)}
            </ul>
        </div>
    )
}
export default Dropdown;