import React, { useState, useEffect, useContext } from 'react';
import AuthContext from 'context/AuthContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainAdmin() {
    const [user, setUser] = useState([]);


    const auth = useContext(AuthContext);

    useEffect(() => {
        getUser();
    }, [auth]);

    const getUser = async () => {
        const response = await auth.axiosJWT.get(`http://localhost:5000/user`, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        });
        setUser(response.data);
    };

    const [tab, setTab] = useState('Aktif');

    useEffect(() => {
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
    }, [user]);

    let [aktif, setAktif] = useState([]);
    let [nonAktif, setNonAktif] = useState([]);

    const switchToNon = () => {
        setTab("Non")
    }

    const switchToAktif = () => {
        setTab("Aktif")
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="col-span-12 lg:col-span-10">
            <div class="text-lg font-bold text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-white shadow mb-3">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2 cursor-pointer" onClick={switchToAktif}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Aktif" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`} aria-current="page">Staff Magang Aktif</p>
                    </li>
                    <li class="mr-2 cursor-pointer" onClick={switchToNon}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Non" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`}>Staff Magang Non Aktif</p>
                    </li>
                </ul>
            </div>
            {tab === "Aktif" &&
                <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="bg-white p-3 shadow rounded mb-16">
                    <table className="text-left table-auto w-full">
                        <thead>
                            <tr className="text-gray-500">
                                <th className="font-semibold p-3">No.</th>
                                <th className="font-semibold p-3">Nama</th>
                                <th className="font-semibold p-3">Asal Instansi</th>
                                <th className="font-semibold p-3">Pembimbing</th>
                                <th className="font-semibold p-3 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aktif.map((item, index) => (
                                <tr className="text-gray-900 border-t hover:bg-gray-100">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{item.nama}</td>
                                    <td className="p-3">{item.asal_instansi}</td>
                                    <td className="p-3">{item.pembimbing.nama}</td>
                                    <td className="p-3 text-center">
                                        <div className="flex justify-center items-center">
                                            <Link to={`/profile/${item._id}`} key={item._id} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                </svg>
                                                <p className="ml-1">Detail</p>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            }

            {tab === "Non" &&
                <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="bg-white p-3 shadow rounded mb-16">
                    <table className="text-left table-auto w-full">
                        <thead>
                            <tr className="text-gray-500">
                                <th className="font-semibold p-3">No.</th>
                                <th className="font-semibold p-3">Nama</th>
                                <th className="font-semibold p-3">Asal Instansi</th>
                                <th className="font-semibold p-3">Pembimbing</th>
                                <th className="font-semibold p-3 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nonAktif.map((item, index) => (
                                <tr className="text-gray-900 border-t hover:bg-gray-100">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{item.nama}</td>
                                    <td className="p-3">{item.asal_instansi}</td>
                                    <td className="p-3">{item.pembimbing.nama}</td>
                                    <td className="p-3 text-center">
                                        <div className="flex justify-center items-center">
                                            <Link to={`/profile/${item._id}`} key={item._id} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                </svg>
                                                <p className="ml-1">Detail</p>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            }
        </motion.div>
    )
}