import React from 'react';
import Header from './sub/Header.js';
import Sidebar from 'components/Sidebar.js';
import MainHome from './sub/MainHome.js';
import Pembimbing from './sub/Pembimbing.js';
import Bottombar from 'components/Bottombar.js';
import CheckUser from './sub/CheckUser.js';

export default function Home() {
    CheckUser();
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5 mb-4">
                <Sidebar activePage="home" anim="home"/>
                <MainHome />
                <Pembimbing />
            </div>
            <Bottombar activePage="home" />
        </div>
    )
}