import React from 'react'
import Header from './sub/Header.js'
import Sidebar from 'components/Sidebar.js'
import MainPresensi from './sub/MainPresensi'
import Bottombar from 'components/Bottombar.js';

export default function Home() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="presensi"/>
                <MainPresensi />
            </div>
            <Bottombar activePage="presensi" />
        </div>
    )
}