import React from 'react'
import Header from './sub/Header'
import Sidebar from 'components/Sidebar'
import MainPresensiPembimbing from './sub/MainPresensiPembimbing'
import Bottombar from 'components/Bottombar.js';
import CheckPembimbing from './sub/CheckPembimbing.js';

export default function PresensiPembimbing() {
    CheckPembimbing();
    return (
        <div>
            <Header kelas="hidden md:flex" />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="presensi"/>
                <MainPresensiPembimbing />
            </div>
            <Bottombar activePage="presensi" />
        </div>
    )
}