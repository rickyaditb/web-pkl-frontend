import React from 'react'
import Header from './sub/Header.js'
import Sidebar from './sub/Sidebar.js'
import MainPresensi from './sub/MainPresensi'
import Pembimbing from './sub/Pembimbing.js'

export default function Home() {
    return (
        <div>
            <Header />
            <div class="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="presensi"/>
                <MainPresensi />
                <Pembimbing />
            </div>
        </div>
    )
}