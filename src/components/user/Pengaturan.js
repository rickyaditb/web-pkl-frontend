import React from 'react';
import Header from './sub/Header.js';
import Sidebar from 'components/Sidebar.js';
import Profile from 'components/user/sub/Profile.js';
import MainPengaturan from './sub/MainPengaturan.js';
import Bottombar from 'components/Bottombar.js';

export default function Pengaturan() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="pengaturan" />
                <MainPengaturan />
                <Profile kelas="hidden md:block" />
            </div>
            <Bottombar activePage="pengaturan" />
        </div>
    )
}