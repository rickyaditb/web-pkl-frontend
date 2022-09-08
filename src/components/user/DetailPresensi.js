import React from 'react'
import Header from './sub/Header.js'
import Sidebar from 'components/Sidebar.js'
import MainDetailPresensi from './sub/MainDetailPresensi.js'
import Bottombar from 'components/Bottombar.js';
import CheckUser from './sub/CheckUser.js';

export default function DetailPresensi() {
    CheckUser();
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="presensi"/>
                <MainDetailPresensi />
            </div>
            <Bottombar activePage="presensi" />
        </div>
    )
}