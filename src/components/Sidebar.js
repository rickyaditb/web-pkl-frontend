import React, { useContext, useEffect, useState } from 'react'
import AuthContext from 'context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion';

export default function Sidebar(props) {
    let activePage = props.activePage;

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
        if (auth.role === "user") {
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

    return (
        <div className="col-span-2 mb-96 hidden lg:block">
            <Link to={beranda}>
                {props.anim === "home" ?
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }} className={`text-gray-600 px-4 py-3 ${activePage === "home" && "bg-utama text-white "} font-bold rounded-lg flex cursor-pointer ${activePage !== "home" && "hover:bg-purple-300 "} duration-300 hover:bg-sekunder`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <p className="ml-2">Beranda</p>
                    </motion.div> :
                    <div className={`text-gray-600 px-4 py-3 ${activePage === "home" && "bg-utama text-white "} font-bold rounded-lg flex cursor-pointer ${activePage !== "home" && "hover:bg-purple-300 "} duration-300 hover:bg-sekunder`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <p className="ml-2">Beranda</p>
                    </div>
                }
            </Link>
            <Link to={presensi}>
                {props.anim === "presensi" ?
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }} className={`text-gray-600 px-4 py-3 ${activePage === "presensi" && "bg-utama text-white "} font-bold rounded-lg flex cursor-pointer ${activePage !== "presensi" && "hover:bg-purple-300 "} duration-300 hover:bg-sekunder`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="ml-2">Presensi</p>
                    </motion.div> :
                    <div className={`text-gray-600 px-4 py-3 ${activePage === "presensi" && "bg-utama text-white "} font-bold rounded-lg flex cursor-pointer ${activePage !== "presensi" && "hover:bg-purple-300 "} duration-300 hover:bg-sekunder`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="ml-2">Presensi</p>
                    </div>
                }
            </Link>
            <Link to={laporan}>
                {props.anim === "laporan" ?
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }} className={`text-gray-600 px-4 py-3 ${activePage === "laporan" && "bg-utama text-white "} font-bold rounded-lg flex cursor-pointer ${activePage !== "laporan" && "hover:bg-purple-300 "} duration-300 hover:bg-sekunder`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="ml-2">Laporan</p>
                    </motion.div> :
                    <div className={`text-gray-600 px-4 py-3 ${activePage === "laporan" && "bg-utama text-white "} font-bold rounded-lg flex cursor-pointer ${activePage !== "laporan" && "hover:bg-purple-300 "} duration-300 hover:bg-sekunder`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="ml-2">Laporan</p>
                    </div>
                }
            </Link>
            <Link to="/pengaturan">
                {props.anim === "pengaturan" ?
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }} className={`text-gray-600 px-4 py-3 ${activePage === "pengaturan" && "bg-utama text-white "} font-bold rounded-lg flex cursor-pointer ${activePage !== "pengaturan" && "hover:bg-purple-300 "} duration-300 hover:bg-sekunder`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="ml-2">Pengaturan</p>
                    </motion.div> :
                    <div className={`text-gray-600 px-4 py-3 ${activePage === "pengaturan" && "bg-utama text-white "} font-bold rounded-lg flex cursor-pointer ${activePage !== "pengaturan" && "hover:bg-purple-300 "} duration-300 hover:bg-sekunder`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p className="ml-2">Pengaturan</p>
                    </div>
                }
            </Link>
            <div onClick={Logout} className="px-4 py-3 text-gray-600 font-bold rounded-lg flex cursor-pointer hover:bg-red-300 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <p className="ml-2">Keluar</p>
            </div>
        </div>
    )
}