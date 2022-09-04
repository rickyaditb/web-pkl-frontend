import React from 'react'
import Header from './sub/Header.js'
import Sidebar from './sub/Sidebar.js'
import MainDetailLaporan from './sub/MainDetailLaporan.js'

export default function DetailLaporan() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan"/>
                <MainDetailLaporan />
            </div>
        </div>
    )
}