import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'

import classes from './Layout.module.css'

const Layout = ({ children }) => {
    return <>
        <Header />
        <main>
            <div className={classes['main-container']}>
                {children}
            </div>
        </main>
        <Footer />
    </>
}

export default Layout;