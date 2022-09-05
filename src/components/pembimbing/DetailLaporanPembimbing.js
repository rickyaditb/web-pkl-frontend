import React from 'react'
import Header from './sub/Header'
import Sidebar from './sub/Sidebar'
import MainDetailLaporanPembimbing from './sub/MainDetailLaporanPembimbing'


export default function DetailLaporanPembimbing() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan"/>
                <MainDetailLaporanPembimbing />
            </div>
        </div>
    )
}