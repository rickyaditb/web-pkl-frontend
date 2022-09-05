import React from 'react'
import Header from './sub/Header.js'
import Sidebar from 'components/Sidebar.js'
import MainTambahLaporan from './sub/MainTambahLaporan.js'

export default function TambahLaporan() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan"/>
                <MainTambahLaporan />
            </div>
        </div>
    )
}