import classes from './Dropdown.module.css'
import DropListItem from './DropListItem/DropListItem'
import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const Dropdown = ({
    title = 'notitle',
    type = 'list',
    avaliableOptions=[],
    className = '',
    clickHandler = null,
    resetHandler = null,
    activeSelection = null,
    showEmptyItems=true,
}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className={classes[`droplist-container`]} onMouseLeave={() => setShowDropdown(false)}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%', justifyContent: 'center' }}>
                <div
                    className={className}
                    style={{ fontWeight: activeSelection ? 600 : 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onMouseOver={() => setShowDropdown(prevState => !prevState)}>{activeSelection ? activeSelection : title}
                </div>
                <div className={classes['clear-filter']}>
                    {activeSelection && <AiFillCloseCircle  onClick={() => { resetHandler && resetHandler(); setShowDropdown(false) }} size={22} fill="rgba(36, 136, 189)" />}
                </div>
            </div>
            <ul
                className={`${classes[`droplist-options-container`]}`}
                style={{ display: showDropdown ? 'flex' : 'none' }}>
                <h1>{title}</h1>
                {avaliableOptions.map(el => <DropListItem showEmptyItems={showEmptyItems} key={el.id} title={el.title} count={el.count} type={type} clickHandler={() => { clickHandler && clickHandler(el.title); setShowDropdown(false); }} />)}
            </ul>
        </div>

    )
}
export default Dropdown;