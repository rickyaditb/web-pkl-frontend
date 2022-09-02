import React from 'react'
import Header from './sub/Header.js'
import Sidebar from './sub/Sidebar.js'
import MainPresensi from './sub/MainPresensi'

export default function Home() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="presensi"/>
                <MainPresensi />
            </div>
        </div>
    )
}