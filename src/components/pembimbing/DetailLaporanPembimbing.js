import React from 'react'
import Header from './sub/Header'
import Sidebar from 'components/Sidebar'
import MainDetailLaporanPembimbing from './sub/MainDetailLaporanPembimbing'
import Bottombar from 'components/Bottombar.js';
import CheckPembimbing from './sub/CheckPembimbing.js';


export default function DetailLaporanPembimbing() {
    CheckPembimbing();
    return (
        <div>
            <Header kelas="hidden md:flex" />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan"/>
                <MainDetailLaporanPembimbing />
            </div>
            <Bottombar activePage="laporan" />
        </div>
    )
}