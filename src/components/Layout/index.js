import React from 'react'
import { Outlet, Routes } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import useOffline from '../../hooks/useOffline'
import Offline from '../Offline'

const Layout = () => {
    const isOffline=useOffline();
    if(isOffline) return <Offline/>
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout
