import React from 'react'
import Header from './sub/Header.js'
import Sidebar from 'components/Sidebar.js'
import MainLaporan from './sub/MainLaporan.js'
import Bottombar from 'components/Bottombar.js';
import CheckUser from './sub/CheckUser.js';

export default function Laporan() {
    CheckUser();
    return (
        <div>
            <Header kelas="hidden md:flex" />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan" anim="laporan"/>
                <MainLaporan />
            </div>
            <Bottombar activePage="laporan" />
        </div>
    )
}