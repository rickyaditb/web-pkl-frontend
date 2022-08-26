import React from 'react'
import Header from './sub/Header.js'
import Sidebar from './sub/Sidebar.js'
import MainDetailPresensi from './sub/MainDetailPresensi.js'

export default function DetailPresensi() {
    return (
        <div>
            <Header />
            <div class="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="presensi"/>
                <MainDetailPresensi />
            </div>
        </div>
    )
}