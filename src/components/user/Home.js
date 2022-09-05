import React from 'react';
import Header from './sub/Header.js';
import Sidebar from 'components/Sidebar.js';
import MainHome from './sub/MainHome.js';
import Pembimbing from './sub/Pembimbing.js';

export default function Home() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="home" />
                <MainHome />
                <Pembimbing />

            </div>
        </div>
    )
}