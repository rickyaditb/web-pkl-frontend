import React, { useState, useEffect, useContext } from 'react';
import AuthContext from 'context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import noData from 'components/img/no-data.svg';

export default function MainPresensiPembimbing() {
    const [user, setUser] = useState([]);
    const [user2, setUser2] = useState("Loading");
    const auth = useContext(AuthContext);
    let [aktif, setAktif] = useState("Loading");
    let [nonAktif, setNonAktif] = useState("Loading");

    useEffect(() => {
        auth && getDetailPresensi();
    }, [auth])

    const targetUrl = auth.role === "admin" ? "http://localhost:5000/presensi_detail" : `http://localhost:5000/presensi_pembimbing/${auth.id}`

    const getDetailPresensi = async () => {
        const response = await axios.get(targetUrl);
        const response2 = await axios.get(`http://localhost:5000/presensi_detail`);
        if (response.data.length === 0) {
            setAktif([])
            setNonAktif([])
        }
        if (response2.data.length === 0) {
            setUser2([]);
        }
        setUser(response.data);
        setUser2(response2.data);
    };

    const [tab, setTab] = useState('Aktif');

    useEffect(() => {
        if (user.length > 0) {
            let aktifContainer = [];
            let nonContainer = [];
            user.map((item, index) => {
                if (item.status === "Aktif") {
                    aktifContainer.push({ ...item })
                } else if (item.status === "Non Aktif") {
                    nonContainer.push({ ...item })
                }
            });
            setAktif(aktifContainer);
            setNonAktif(nonContainer);
        }
    }, [user]);

    const switchToNon = () => {
        setTab("Non")
    }

    const switchToAktif = () => {
        setTab("Aktif")
    }

    const switchToSemua = () => {
        setTab("Semua")
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="col-span-12 lg:col-span-10 mb-8">
            <div class="text-lg font-bold text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-white shadow mb-3">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2 cursor-pointer" onClick={switchToAktif}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Aktif" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`} aria-current="page">Staff {auth.role === "pembimbing" ? "Dibimbing" : "Magang"} Aktif</p>
                    </li>
                    <li class="mr-2 cursor-pointer" onClick={switchToNon}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Non" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`}>Staff {auth.role === "pembimbing" ? "Dibimbing" : "Magang"} Non Aktif</p>
                    </li>
                    {auth.role === "pembimbing" &&
                        <li class="mr-2 cursor-pointer" onClick={switchToSemua}>
                            <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Semua" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`}>Semua Staff</p>
                        </li>
                    }
                </ul>
            </div>
            {tab === "Aktif" &&
                <div>
                    {aktif === "Loading" ?
                        <></> :
                        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="bg-white p-3 shadow rounded mb-16">
                            {aktif.length > 0 ?
                                <table className="text-left table-auto w-full">
                                    <thead>
                                        <tr className="text-gray-500">
                                            <th className="font-semibold p-3">No.</th>
                                            <th className="font-semibold p-3">Nama</th>
                                            <th className="font-semibold p-3 text-center">Hadir</th>
                                            <th className="font-semibold p-3 text-center">Terlambat</th>
                                            <th className="font-semibold p-3 text-center">Sakit</th>
                                            <th className="font-semibold p-3 text-center">Izin</th>
                                            <th className="font-semibold p-3 text-center">Alpha</th>
                                            <th className="font-semibold p-3 text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {aktif.map((item, index) => (
                                            <tr className="text-gray-900 border-t hover:bg-gray-100" key={item._id}>
                                                <td className="p-3">{index + 1}</td>
                                                <td className="p-3">{item.nama}</td>
                                                <td className="p-3 text-center">{item.hadir}</td>
                                                <td className="p-3 text-center">{item.terlambat}</td>
                                                <td className="p-3 text-center">{item.sakit}</td>
                                                <td className="p-3 text-center">{item.izin}</td>
                                                <td className="p-3 text-center">{item.alpha}</td>
                                                <td className="p-3 text-center">
                                                    <div className="flex justify-center items-center">
                                                        <Link to={`/presensi_pembimbing/${item._id}`} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <p className="ml-1">Detail Presensi</p>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table> :
                                <div className='p-4 md:p-8 grid md:grid-cols-2 justify-items-center content-center gap-3 md:gap-0'>
                                    <img src={noData} alt="" className='w-64' />
                                    <div className='flex items-center mt-5 md:mt-0 text-3xl md:text-5xl font-bold text-gray-700 text-center'>Data Staff Aktif <br />Kosong</div>
                                </div>
                            }
                        </motion.div>
                    }
                </div>
            }
            {tab === "Non" &&
                <div>
                    {nonAktif === "Loading" ?
                        <></> :
                        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="bg-white p-3 shadow rounded mb-16">
                            {nonAktif.length > 0 ?
                                <table className="text-left table-auto w-full">
                                    <thead>
                                        <tr className="text-gray-500">
                                            <th className="font-semibold p-3">No.</th>
                                            <th className="font-semibold p-3">Nama</th>
                                            <th className="font-semibold p-3 text-center">Hadir</th>
                                            <th className="font-semibold p-3 text-center">Terlambat</th>
                                            <th className="font-semibold p-3 text-center">Sakit</th>
                                            <th className="font-semibold p-3 text-center">Izin</th>
                                            <th className="font-semibold p-3 text-center">Alpha</th>
                                            <th className="font-semibold p-3 text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {nonAktif.map((item, index) => (
                                            <tr className="text-gray-900 border-t hover:bg-gray-100" key={item._id}>
                                                <td className="p-3">{index + 1}</td>
                                                <td className="p-3">{item.nama}</td>
                                                <td className="p-3 text-center">{item.hadir}</td>
                                                <td className="p-3 text-center">{item.terlambat}</td>
                                                <td className="p-3 text-center">{item.sakit}</td>
                                                <td className="p-3 text-center">{item.izin}</td>
                                                <td className="p-3 text-center">{item.alpha}</td>
                                                <td className="p-3 text-center">
                                                    <div className="flex justify-center items-center">
                                                        <Link to={`/presensi_pembimbing/${item._id}`} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <p className="ml-1">Detail Presensi</p>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table> :
                                <div className='p-4 md:p-8 grid md:grid-cols-2 justify-items-center content-center gap-3 md:gap-0'>
                                    <img src={noData} alt="" className='w-64' />
                                    <div className='flex items-center mt-5 md:mt-0 text-3xl md:text-5xl font-bold text-gray-700 text-center'>Data Staff <br /> Non Aktif <br />Kosong</div>
                                </div>
                            }
                        </motion.div>
                    }
                </div>
            }

            {tab === "Semua" &&
                <div>
                    {user2 === "Loading" ?
                        <></> :
                        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="bg-white p-3 shadow rounded mb-16">
                            {user2.length > 0 ?
                                <table className="text-left table-auto w-full">
                                    <thead>
                                        <tr className="text-gray-500">
                                            <th className="font-semibold p-3">No.</th>
                                            <th className="font-semibold p-3">Nama</th>
                                            <th className="font-semibold p-3">Pembimbing</th>
                                            <th className="font-semibold p-3 text-center">Hadir</th>
                                            <th className="font-semibold p-3 text-center">Terlambat</th>
                                            <th className="font-semibold p-3 text-center">Sakit</th>
                                            <th className="font-semibold p-3 text-center">Izin</th>
                                            <th className="font-semibold p-3 text-center">Alpha</th>
                                            <th className="font-semibold p-3 text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user2.map((item, index) => (
                                            <tr className="text-gray-900 border-t hover:bg-gray-100" key={item._id}>
                                                <td className="p-3">{index + 1}</td>
                                                <td className="p-3">{item.nama}</td>
                                                <td className="p-3">{item.pembimbing.nama}</td>
                                                <td className="p-3 text-center">{item.hadir}</td>
                                                <td className="p-3 text-center">{item.terlambat}</td>
                                                <td className="p-3 text-center">{item.sakit}</td>
                                                <td className="p-3 text-center">{item.izin}</td>
                                                <td className="p-3 text-center">{item.alpha}</td>
                                                <td className="p-3 text-center">
                                                    <div className="flex justify-center items-center">
                                                        <Link to={`/presensi_pembimbing/${item._id}`} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <p className="ml-1">Detail Presensi</p>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table> :
                                <div className='p-4 md:p-8 grid md:grid-cols-2 justify-items-center content-center gap-3 md:gap-0'>
                                    <img src={noData} alt="" className='w-64' />
                                    <div className='flex items-center mt-5 md:mt-0 text-3xl md:text-5xl font-bold text-gray-700 text-center'>Data Staff <br /> Non Aktif <br />Kosong</div>
                                </div>
                            }
                        </motion.div>
                    }
                </div>
            }
        </motion.div>
    )
}