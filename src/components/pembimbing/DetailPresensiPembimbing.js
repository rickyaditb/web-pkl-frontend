import React from 'react'
import Header from './sub/Header'
import Sidebar from './sub/Sidebar'
import MainDetailPresensiPembimbing from './sub/MainDetailPresensiPembimbing'


export default function DetailPresensiPembimbing() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="presensi"/>
                <MainPresensiPembimbing />


            </div>
        </div>
    )
}