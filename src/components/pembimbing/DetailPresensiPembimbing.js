import React from 'react'
import Header from './sub/Header'
import Sidebar from 'components/Sidebar'
import MainDetailPresensiPembimbing from './sub/MainDetailPresensiPembimbing'
import Bottombar from 'components/Bottombar.js';
import CheckPembimbing from './sub/CheckPembimbing.js';


export default function DetailPresensiPembimbing() {
    CheckPembimbing();
    return (
        <div>
            <Header kelas="hidden md:flex" />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="presensi"/>
                <MainDetailPresensiPembimbing />
            </div>
            <Bottombar activePage="presensi" />
        </div>
    )
}