import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'

import classes from './Layout.module.css'

const Layout = ({ children }) => {
    return <>
        <div className={classes['layout-container']}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    </>
}

export default Layout;