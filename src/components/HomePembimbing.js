import React from 'react'
import Header from './sub/Header.js'
import Sidebar from './sub/Sidebar.js'
import MainPembimbing from './sub/MainPembimbing.js'
import Profile from './sub/Profile.js'

export default function HomePembimbing() {
    return (
        <div>
            <Header />
            <div class="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="home"/>
                <MainPembimbing />
                <Profile />
            </div>
        </div>
    )
}