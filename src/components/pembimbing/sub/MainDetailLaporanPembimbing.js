import React, { useState, useEffect, useContext } from 'react'
import AuthContext from 'context/AuthContext';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/id';
import noData from 'components/img/no-data.svg';
import { motion } from 'framer-motion';
import ReactDOMServer from 'react-dom/server';

export default function MainDetailLaporanPembimbing() {
    const [presensi, setPresensi] = useState("x");
    const [user, setUser] = useState({})

    const auth = useContext(AuthContext);

    const { id } = useParams();

    useEffect(() => {
        getPresensi();
        getStatistic();
    }, [auth])

    const getPresensi = async () => {
        const response = await axios.get(`http://localhost:5000/laporan_user/${id}`);
        setPresensi(response.data);
    };

    const getStatistic = async () => {
        const response = await axios.get(`http://localhost:5000/laporan_detail/${id}`)
        setUser(response.data[0])
    }

    const id_user = user._id;
    const gambar_user = user.gambar;
    let url = `http://localhost:5000/${id_user}${gambar_user}`;

    const profilePlaceholder = ReactDOMServer.renderToStaticMarkup(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bg-gray-500 p-3 text-white w-28 h-28 rounded-full mx-5">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>)

    return (
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="col-span-12 lg:col-span-10">
            <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                <p className="my-auto flex items-center gap-1">
                    <Link to={`/laporan_pembimbing/`}>Laporan</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <p>Detail Laporan</p>
                </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-3 mb-3">
                <Link to={`/profile/${user._id}`} className="bg-white p-5 rounded-lg shadow flex items-center xl:col-span-4">
                    {gambar_user && <img alt="foto-staff" onError={(e) => e.target.outerHTML = profilePlaceholder} src={url} className="bg-gray-500 w-28 h-28 rounded-full mx-5" />}
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
                </Link>
                <div className='grid gap-3 grid-cols-1'>
                    <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                        {user.status === "Aktif" ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-auto mr-2 bg-green-400 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg> : (user.status === "Non Aktif") ?
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 my-auto mr-2 bg-red-400 text-white p-2 rounded-lg">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-auto mr-2 bg-green-400 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                        }
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">Status</p>
                            <p className={`-mb-1 ${user.status === "Aktif" ? "text-xl" : "text-sm"}`}>{user.status}</p>
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
                            <p className="text-xs text-gray-500">Jumlah Laporan</p>
                            <p className="text-xl -mb-1">{user.jumlah_laporan}</p>
                        </div>
                    </div>
                </div>
            </div>
            {(() => {
                if (presensi === "x")
                    return <></>
                if (presensi.length === 0)
                    return <div className='mb-24 bg-white p-4 md:p-8 grid grid-cols-2 shadow rounded justify-items-center content-center gap-3 md:gap-0'>
                        <img src={noData} alt="" className='w-64' />
                        <div className='flex items-center text-2xl md:text-4xl font-bold text-gray-700 text-center'>Data Laporan <br />Masih Kosong</div>
                    </div>
                else
                    return <div className="bg-white p-3 shadow rounded mb-24">
                        <table className="text-left table-auto w-full">
                            <thead>
                                <tr className="text-gray-500">
                                    <th className="font-semibold p-3">No.</th>
                                    <th className="font-semibold p-3">Hari dan Tanggal Laporan</th>
                                    <th className="font-semibold p-3 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {presensi.map((item, index) => (
                                    <tr className="text-gray-900 border-t hover:bg-gray-100">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{moment(item.tanggal_laporan).format('dddd, Do MMMM YYYY')}</td>
                                        <td className="p-3">
                                            <div className="flex justify-center items-center">
                                                <Link to={`/laporan/detail/${item._id}`} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="ml-1">Lihat Laporan</p>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            })()}
        </motion.div>
    )
}