import React from 'react'
import Header from './sub/Header.js'
import Sidebar from 'components/Sidebar.js'
import MainEditLaporan from './sub/MainEditLaporan.js'
import Bottombar from 'components/Bottombar.js';
import CheckUser from './sub/CheckUser.js';

export default function EditLaporan() {
    CheckUser();
    return (
        <div>
            <Header kelas="hidden md:flex" />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan"/>
                <MainEditLaporan />
            </div>
            <Bottombar activePage="laporan" />
        </div>
    )
}