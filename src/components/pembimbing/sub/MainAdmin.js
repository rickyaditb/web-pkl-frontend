import React, { useState, useEffect, useContext } from 'react';
import AuthContext from 'context/AuthContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios';
import noData from 'components/img/no-data.svg';

export default function MainAdmin() {
    const [user, setUser] = useState([]);
    const [modal, setModal] = useState(false)
    const [modalValue, setModalValue] = useState("")

    const [tab, setTab] = useState('Aktif');
    const [aktif, setAktif] = useState("Loading");
    const [nonAktif, setNonAktif] = useState("Loading");
    const [pembimbing, setPembimbing] = useState("Loading");

    const auth = useContext(AuthContext);

    useEffect(() => {
        auth && getUser();
        auth && getPembimbing();
    }, [auth]);

    const getUser = async () => {
        const response = await auth.axiosJWT.get(`http://localhost:5000/user`, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        });
        setUser(response.data);
    };

    const getPembimbing = async () => {
        const response = await auth.axiosJWT.get(`http://localhost:5000/pembimbing`, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        });
        setPembimbing(response.data);
    };

    useEffect(() => {
        if (user.length > 1) {
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

    const switchToPembimbing = () => {
        setTab("Pembimbing")
    }

    const showToastMessage = () => {
        toast.success('User berhasil dihapus', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const deleteLaporan = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/hapus_user/${id}`);
            getUser();
            setModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    const konfirmasi = (value) => {
        setModalValue(value);
        setModal(true);
    }

    const batal = () => {
        setModalValue("");
        setModal(false);
    }

    const hapus = () => {
        deleteLaporan(modalValue)
        showToastMessage()
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="col-span-12 lg:col-span-10">
            <AnimatePresence>
                {modal &&
                    <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className="bg-black/50 fixed inset-0 z-0 flex items-center justify-center">
                        <div>
                            <div className="bg-white px-8 py-8 rounded text-center">
                                <p className='font-bold text-2xl text-gray-800 mb-3'>Hapus User ?</p>
                                <p className='text-lg'>User yang sudah dihapus tidak akan bisa dikembalikan.</p>
                                <div className="flex gap-5 mt-3 justify-center">
                                    <button onClick={hapus} className='bg-red-100 text-red-700 w-full rounded py-3 font-bold text-lg'>Ya, Hapus</button>
                                    <button onClick={() => batal()} className='bg-blue-100 text-blue-700 w-full rounded py-3 font-bold text-lg'>Tidak, Kembali</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            <div class="text-lg font-bold text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-white shadow mb-3">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2 cursor-pointer" onClick={switchToAktif}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Aktif" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`} aria-current="page">Staff Magang Aktif</p>
                    </li>
                    <li class="mr-2 cursor-pointer" onClick={switchToNon}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Non" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`}>Staff Magang Non Aktif</p>
                    </li>
                    <li class="mr-2 cursor-pointer" onClick={switchToPembimbing}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Pembimbing" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`}>Pembimbing</p>
                    </li>
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
                                                    <div className="flex justify-center items-center gap-2">
                                                        <Link to={`/profile/${item._id}`} key={item._id} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <p className="ml-1">Detail</p>
                                                        </Link>
                                                        {auth.role === "admin" &&
                                                            <button onClick={() => konfirmasi(item._id)} className="p-2 font-semibold leading-tight text-red-700 bg-red-100 text-sm rounded flex justify-center items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                                </svg>
                                                                <p className="ml-1">Hapus</p>
                                                            </button>
                                                        }
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
                                                    <div className="flex justify-center items-center gap-2">
                                                        <Link to={`/profile/${item._id}`} key={item._id} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <p className="ml-1">Detail</p>
                                                        </Link>
                                                        {auth.role === "admin" &&
                                                            <button onClick={() => konfirmasi(item._id)} className="p-2 font-semibold leading-tight text-red-700 bg-red-100 text-sm rounded flex justify-center items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                                </svg>
                                                                <p className="ml-1">Hapus</p>
                                                            </button>
                                                        }
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

            {tab === "Pembimbing" &&
                <div>
                    {pembimbing === "Loading" ?
                        <></> :
                        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="bg-white p-3 shadow rounded mb-16">
                            {pembimbing.length > 0 ?
                                <table className="text-left table-auto w-full">
                                    <thead>
                                        <tr className="text-gray-500">
                                            <th className="font-semibold p-3">No.</th>
                                            <th className="font-semibold p-3">Nama</th>
                                            <th className="font-semibold p-3">Asal Instansi</th>
                                            <th className="font-semibold p-3 text-center">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pembimbing.map((item, index) => (
                                            <tr className="text-gray-900 border-t hover:bg-gray-100">
                                                <td className="p-3">{index + 1}</td>
                                                <td className="p-3">{item.nama}</td>
                                                <td className="p-3">{item.asal_instansi}</td>
                                                <td className="p-3 text-center">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <Link to={`/profile_pembimbing/${item._id}`} key={item._id} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <p className="ml-1">Detail</p>
                                                        </Link>
                                                        {auth.role === "admin" &&
                                                            <button onClick={() => konfirmasi(item._id)} className="p-2 font-semibold leading-tight text-red-700 bg-red-100 text-sm rounded flex justify-center items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                                </svg>
                                                                <p className="ml-1">Hapus</p>
                                                            </button>
                                                        }
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
        </motion.div>
    )
}