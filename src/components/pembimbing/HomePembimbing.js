import React from 'react'
import Header from './sub/Header.js'
import Sidebar from 'components/Sidebar.js'
import MainPembimbing from './sub/MainPembimbing.js'
import Profile from 'components/user/sub/Profile.js'
import Bottombar from 'components/Bottombar.js';
import CheckPembimbing from './sub/CheckPembimbing.js';

export default function HomePembimbing() {
    CheckPembimbing();
    return (
        <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="home"/>
                <MainPembimbing />
                <Profile />
            </div>
            <Bottombar activePage="home" />
        </div>
    )
}