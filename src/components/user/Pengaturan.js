import React from 'react'
import Header from './sub/Header.js'
import Sidebar from './sub/Sidebar.js'
import Pembimbing from './sub/Pembimbing.js'
import MainPengaturan from './sub/MainPengaturan.js'

export default function Pengaturan() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="pengaturan"/>
                <MainPengaturan />
                <Pembimbing />
            </div>
        </div>
    )
}