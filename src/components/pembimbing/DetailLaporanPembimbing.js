import React from 'react'
import Header from './sub/Header'
import Sidebar from 'components/Sidebar'
import MainDetailLaporanPembimbing from './sub/MainDetailLaporanPembimbing'
import Bottombar from 'components/Bottombar.js';


export default function DetailLaporanPembimbing() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan"/>
                <MainDetailLaporanPembimbing />
            </div>
            <Bottombar activePage="laporan" />
        </div>
    )
}