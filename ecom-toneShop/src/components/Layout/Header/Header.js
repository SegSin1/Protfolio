import React from 'react'
import classes from './Header.module.css'

import MainNavbar from '../../MainNavbar/MainNavbar'

const Header = () => {
    return <header>
        <div className={classes['header-container']}>
            <MainNavbar/>
        </div>
    </header>
}

export default Header;