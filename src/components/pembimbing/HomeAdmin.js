import React from 'react'
import Header from './sub/Header.js'
import Sidebar from 'components/Sidebar.js'
import MainAdmin from './sub/MainAdmin.js'
import Bottombar from 'components/Bottombar.js';

export default function HomeAdmin() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="home"/>
                <MainAdmin />
            </div>
            <Bottombar activePage="home" />
        </div>
    )
}