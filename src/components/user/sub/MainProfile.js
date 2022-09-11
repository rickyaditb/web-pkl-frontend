import React, { useState, useEffect, useContext } from 'react'
import AuthContext from 'context/AuthContext';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/id';

export default function MainProfile() {
    const [presensi, setPresensi] = useState({})
    const [user, setUser] = useState({})

    const auth = useContext(AuthContext);

    const { id } = useParams();

    useEffect(() => {
        getStatistic();
        getUserById();
    }, [auth])

    const getStatistic = async () => {
        const response = await axios.get(`http://localhost:5000/presensi_detail/${id}`)
        setPresensi(response.data[0])
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/user/${id}`)
        setUser(response.data)
    }
    
    return (
        <div className="col-span-12 lg:col-span-10">
            <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                <p className="my-auto flex items-center gap-1">
                    <Link to={`/pembimbing`}>Daftar User</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <p>Detail User</p>
                </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-3">
                <div className="bg-white p-5 rounded-lg shadow flex items-center">
                    <img alt="foto-staff" src="https://randomuser.me/api/portraits/men/79.jpg" className="bg-gray-500 w-28 h-28 rounded-full mx-5" />
                    <div className="ml-5">
                        <div className="flex flex-col gap-1">
                            <div>
                                <p className="text-gray-500">Nama</p>
                                <p className="font-bold text-gray-600 text-xl">{user.nama}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Asal Instansi</p>
                                <p className="font-bold text-gray-600 text-xl">{user.asal_instansi}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 my-auto mr-2 bg-green-400 text-white p-2 rounded-lg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">Status</p>
                            <p className="text-xl -mb-1">Aktif</p>
                        </div>
                    </div>
                    <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 my-auto mr-2 bg-blue-400 text-white p-2 rounded-lg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">Hadir</p>
                            <p className="text-2xl -mb-1">{presensi.hadir}</p>
                        </div>
                    </div>
                    <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 my-auto mr-2 bg-orange-400 text-white p-2 rounded-lg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">Terlambat</p>
                            <p className="text-xl -mb-1">{presensi.terlambat}</p>
                        </div>
                    </div>
                    <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 my-auto mr-2 bg-purple-400 text-white p-2 rounded-lg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">Sakit</p>
                            <p className="text-xl -mb-1">{presensi.sakit}</p>
                        </div>
                    </div>
                    <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 my-auto mr-2 bg-yellow-400 text-white p-2 rounded-lg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">Izin</p>
                            <p className="text-xl -mb-1">{presensi.izin}</p>
                        </div>
                    </div>
                    <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 my-auto mr-2 bg-red-400 text-white p-2 rounded-lg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">Alpha</p>
                            <p className="text-xl -mb-1">{presensi.alpha}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-3 gap-3">
                <div className="bg-white shadow rounded p-3 flex items-center col-span-2 md:col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white bg-blue-400 p-2 rounded" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                    </svg>
                    <div className="ml-3">
                        <p className="text-gray-700">Tanggal Mulai PKL</p>
                        <p className="text-gray-600 font-bold text-xl">{moment(user.tanggal_mulai).format('Do MMMM YYYY')}</p>
                    </div>
                </div>
                <div className="bg-white shadow rounded p-3 flex items-center col-span-2 md:col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white bg-red-400 p-2 rounded" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                    </svg>
                    <div className="ml-3">
                        <p className="text-gray-700">Tanggal Selesai PKL</p>
                        <p className="text-gray-600 font-bold text-xl">{moment(user.tanggal_selesai).format('Do MMMM YYYY')}</p>
                    </div>
                </div>
            </div>
            <div className='flex mt-3 gap-3 justify-center mb-24'>
                <Link to={`/laporan_pembimbing/${user._id}`} className="warna-main p-3 text-white font-bold rounded">
                    Detail Presensi
                </Link>
                <Link to={`/presensi_pembimbing/${user._id}`} className="warna-main p-3 text-white font-bold rounded">
                    Detail Absensi
                </Link>
            </div>
        </div>
    )
}