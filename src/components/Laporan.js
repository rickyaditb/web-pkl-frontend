import React from 'react'
import Header from './sub/Header.js'
import Sidebar from './sub/Sidebar.js'
import MainLaporan from './sub/MainLaporan.js'
import Pembimbing from './sub/Pembimbing.js'

export default function Laporan() {
    return (
        <div>
            <Header />
            <div class="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="laporan"/>
                <MainLaporan />
            </div>
        </div>
    )
}