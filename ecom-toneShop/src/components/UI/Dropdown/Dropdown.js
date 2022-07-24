import classes from './Dropdown.module.css'
import DropListItem from './DropListItem/DropListItem'
import { useState } from 'react'
const Dropdown = ({
    title = 'notitle',
    type = 'list',
    options = [],
    className = '',
    clickHandler = null,
    activeSelection = null
}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className={classes[`droplist-container`]} onMouseLeave={() => setShowDropdown(false)}>
            <div
                className={className}
                style={{ fontWeight: activeSelection ? 600 : 400 }}
                onMouseOver={() => setShowDropdown(prevState => !prevState)}>{activeSelection ? activeSelection : title}</div>
            <ul
                className={`${classes[`droplist-options-container`]}`}
                style={{ display: showDropdown ? 'flex' : 'none' }}>
                <h1>{title}</h1>
                {options.map(el => <DropListItem key={el.id} title={el.title} type={type} clickHandler={() => { clickHandler && clickHandler(el.title); setShowDropdown(false); }} />)}
            </ul>
        </div>
    )
}
export default Dropdown;