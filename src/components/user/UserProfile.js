import React from 'react'
import Header from './sub/Header'
import Sidebar from 'components/Sidebar'
import MainProfile from './sub/MainProfile';
import Bottombar from 'components/Bottombar.js';


export default function UserProfile() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="home"/>
                <MainProfile />
            </div>
            <Bottombar activePage="presensi" />
        </div>
    )
}