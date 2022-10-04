import React, { useContext, useEffect, useState } from 'react'
import AuthContext from 'context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Bottombar(props) {
    const [beranda, setBeranda] = useState('')
    const [presensi, setPresensi] = useState('')
    const [laporan, setLaporan] = useState('')

    const auth = useContext(AuthContext);
    useEffect(() => {
        setSidebar();
    }, [auth]);

    const navigate = useNavigate();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    const setSidebar = () => {
        if(auth.role === "user") {
            setBeranda("/");
            setPresensi("/presensi");
            setLaporan("/laporan");
        } else if (auth.role === "pembimbing") {
            setBeranda("/pembimbing");
            setPresensi("/presensi_pembimbing");
            setLaporan("/laporan_pembimbing");
        } else if (auth.role === "admin") {
            setBeranda("/admin");
            setPresensi("/presensi_pembimbing");
            setLaporan("/laporan_pembimbing");
        }
    }
    let activePage = props.activePage;
    return (
        <div className='grid grid-cols-4 bg-white justify-items-center py-4 shadow-2xl drop-shadow-2xl w-full bottom-0 fixed inset-x-0 block lg:hidden'>
            <Link to={beranda} className={`text-gray-600 font-bold cursor-pointer ${activePage === "home" && "text-utama"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <p>Beranda</p>
            </Link>
            <Link to={presensi} className={`text-gray-600 font-bold cursor-pointer ${activePage === "presensi" && "text-utama"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd" />
                </svg>
                <p>Presensi</p>
            </Link>
            <Link to={laporan} className={`text-gray-600 font-bold cursor-pointer ${activePage === "laporan" && "text-utama"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd" />
                </svg>
                <p>Laporan</p>
            </Link>
            <Link to="/pengaturan" className={`text-gray-600 font-bold cursor-pointer ${activePage === "pengaturan" && "text-utama"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd" />
                </svg>
                <p>Pengaturan</p>
            </Link>
        </div>
    )
}