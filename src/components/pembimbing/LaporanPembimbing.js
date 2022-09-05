import React from 'react'
import Header from './sub/Header'
import Sidebar from './sub/Sidebar'
import MainLaporanPembimbing from './sub/MainLaporanPembimbing'


export default function LaporanPembimbing() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan"/>
                <MainLaporanPembimbing />
            </div>
        </div>
    )
}