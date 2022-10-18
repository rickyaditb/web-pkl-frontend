import React from 'react';
import Header from './sub/Header.js';
import Sidebar from 'components/Sidebar.js';
import Profile from 'components/user/sub/Profile.js';
import MainPengaturan from './sub/MainPengaturan.js';
import Bottombar from 'components/Bottombar.js';

export default function Pengaturan() {
    return (
        <div>
            <Header kelas="hidden md:flex" />
            <div className="grid grid-cols-12 gap-3 mt-3 md:mt-5">
                <Sidebar activePage="pengaturan" anim="pengaturan" />
                <MainPengaturan />
                <Profile kelas="hidden md:block" />
            </div>
            <Bottombar activePage="pengaturan" />
        </div>
    )
}