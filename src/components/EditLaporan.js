import React from 'react'
import Header from './sub/Header.js'
import Sidebar from './sub/Sidebar.js'
import MainEditLaporan from './sub/MainEditLaporan.js'

export default function EditLaporan() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan"/>
                <MainEditLaporan />
            </div>
        </div>
    )
}