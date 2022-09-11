import React, { useState, useEffect, useContext } from 'react';
import AuthContext from 'context/AuthContext';
import axios from 'axios';
import CalendarImg from './img/calendar.svg';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/id';
import noData from 'components/img/no-data.svg';



export default function MainPresensi() {
    const user = useContext(AuthContext);
    const id_user = user.id;

    const [presensi, setPresensi] = useState("x");
    const [presensiToday, setPresensiToday] = useState("x");
    const [stat, setStat] = useState({})

    useEffect(() => {
        id_user && getPresensi();
        id_user && getPresensiToday();
        id_user && getStatistic();
    }, [id_user])

    const getPresensi = async () => {
        const response = await axios.get(`http://localhost:5000/presensi_user/${id_user}`);
        setPresensi(response.data);
    };
    const getPresensiToday = async () => {
        const response = await axios.get(`http://localhost:5000/presensi_today/${id_user}`);
        setPresensiToday(response.data);
    };

    const getStatistic = async () => {
        const response = await axios.get(`http://localhost:5000/presensi_detail/${id_user}`)
        setStat(response.data[0])
    }

    const d = new Date();
    const jam = `0${d.getHours()}`;
    const menit = `0${d.getMinutes()}`;
    const final = `${jam.slice(-2)}:${menit.slice(-2)} WIB`;


    return (
        <div className="col-span-12 lg:col-span-10">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-2 shadow rounded">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-blue-300 text-white p-2 mr-3 rounded" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                        </svg>
                        <div>
                            <p className="text-gray-600 text-sm ">Waktu Absensi</p>
                            <p className="text-xl text-gray-600 font-bold -mt-1">08:00 - 9:00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 shadow rounded">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-green-300 text-white p-2 mr-3 rounded" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <div>
                            <p className="text-gray-600 text-sm ">Hari Absensi</p>
                            <p className="text-xl text-gray-600 font-bold -mt-1">Senin - Jumat</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-3 p-5 sm:p-8 rounded shadow grid grid-cols-2 justify-items-center">
                <img src={CalendarImg} className="h-48 sm:block hidden" />
                <div className="flex flex-col justify-center col-span-2 sm:col-span-1">
                    {
                        (() => {
                            if (presensiToday === "x")
                                return <div className='mb-96'></div>
                            if (presensiToday === null)
                                return <div id="awal">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-green-300 text-white p-2 mr-3 rounded" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                        </svg>
                                        <div>
                                            <p className="text-gray-600 text-sm ">Hari dan Tanggal</p>
                                            <p className="text-xl text-gray-600 font-bold -mt-1">{moment().format("dddd, Do MMMM YYYY")}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-blue-300 text-white p-2 mr-3 rounded" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                        </svg>
                                        <div>
                                            <p className="text-gray-600 text-sm ">Waktu</p>
                                            <p className="text-xl text-gray-600 font-bold -mt-1" id="jam-hari-ini">{final}</p>
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <Link to={`/presensi/detail/`} className="warna-main text-white px-5 py-3 font-bold rounded" onclick="absen()">Absen</Link>
                                    </div>
                                </div>
                            else
                                return <div id="akhir">
                                    <p className="text-gray-700 text-3xl text-center font-bold">Hari Ini Kamu sudah Absen<br />Terima Kasih!</p>
                                </div>
                        })()
                    }
                </div>
            </div>
            <div className="grid grid-cols-5 gap-3 mt-3">
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
                        <p className="text-2xl -mb-1">{stat.hadir}</p>
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
                        <p className="text-xl -mb-1">{stat.terlambat}</p>
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
                        <p className="text-xl -mb-1">{stat.sakit}</p>
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
                        <p className="text-xl -mb-1">{stat.izin}</p>
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
                        <p className="text-xl -mb-1">{stat.alpha}</p>
                    </div>
                </div>
            </div>
            {(() => {
                if (presensi === "x")
                    return <></>
                if (presensi.length === 0)
                    return <div className='bg-white p-4 md:p-8 grid grid-cols-2 mb-16 shadow rounded justify-items-center content-center gap-3 md:gap-0 mt-3'>
                        <img src={noData} alt="" className='w-64' />
                        <div className='flex items-center text-2xl md:text-4xl font-bold text-gray-700 text-center'>Data Presensi Kosong, Silahkan Absen</div>
                    </div>
                else
                    return <div className="bg-white p-3 shadow rounded mb-8 mt-3">
                        <table className="text-left table-auto w-full">
                            <thead>
                                <tr className="text-gray-500">
                                    <th className="font-semibold p-3">No.</th>
                                    <th className="font-semibold p-3">Hari dan Tanggal Absensi</th>
                                    <th className="font-semibold p-3 text-center">Jam Absensi</th>
                                    <th className="font-semibold p-3 text-center">Keterangan</th>
                                    <th className="font-semibold p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {presensi.map((item, index) => (
                                    <tr className="text-gray-900 border-t hover:bg-gray-100" key={item._id}>
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{moment(item.waktu_absensi).format('dddd, Do MMMM YYYY')}</td>
                                        <td className="p-3 text-center">{moment(item.waktu_absensi).format('HH:mm')}</td>
                                        <td className="p-3">
                                            <div className="flex justify-center items-center">
                                                {
                                                    (() => {
                                                        if (item.keterangan === "Hadir")
                                                            return <div className="px-3 py-2 font-semibold leading-tight text-green-700 bg-green-200 text-lg rounded flex justify-center items-center">
                                                                <p>{item.keterangan}</p>
                                                            </div>
                                                        if (item.keterangan === "Sakit")
                                                            return <div className="px-3 py-2 font-semibold leading-tight text-yellow-700 bg-yellow-200 text-lg rounded flex justify-center items-center">
                                                                <p>{item.keterangan}</p>
                                                            </div>
                                                        if (item.keterangan === "Izin")
                                                            return <div className="px-3 py-2 font-semibold leading-tight text-red-700 bg-red-200 text-lg rounded flex justify-center items-center">
                                                                <p>{item.keterangan}</p>
                                                            </div>
                                                    })()
                                                }
                                            </div>
                                        </td>
                                        <td className='p-3'>
                                            <div className="flex justify-center items-center">
                                                <Link to={`/presensi/detail/`} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="ml-1">Detail Absensi</p>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            })()}
        </div>
    )
}
