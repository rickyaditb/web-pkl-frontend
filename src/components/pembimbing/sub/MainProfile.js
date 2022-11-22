import React, { useState, useEffect, useContext } from 'react'
import AuthContext from 'context/AuthContext';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/id';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOMServer from 'react-dom/server';
import { toast } from 'react-toastify';

export default function MainProfile() {
    const [bimbingan, setBimbingan] = useState([])
    const [user, setUser] = useState({})
    const [modal, setModal] = useState(false)
    const [modalValue, setModalValue] = useState("")

    const auth = useContext(AuthContext);

    const { id } = useParams();

    useEffect(() => {
        getStatistic();
        getUserById();
    }, [auth])

    const getStatistic = async () => {
        const response = await axios.get(`https://web-pkl-backend.vercel.app/user_pembimbing/${id}`)
        setBimbingan(response.data)
    }

    const getUserById = async () => {
        const response = await axios.get(`https://web-pkl-backend.vercel.app/user/${id}`)
        setUser(response.data)
    }

    const id_user = user._id;
    const gambar_user = user.gambar;
    let url = `https://web-pkl-backend.vercel.app/${id_user}${gambar_user}`;

    const profilePlaceholder = ReactDOMServer.renderToStaticMarkup(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bg-gray-500 p-3 text-white w-28 h-28 rounded-full mx-5">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>)

    const showToastMessage = () => {
        toast.success('User berhasil dihapus', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const deleteLaporan = async (id) => {
        try {
            await axios.delete(`https://web-pkl-backend.vercel.app/hapus_user/${id}`);
            getStatistic();
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="col-span-12 lg:col-span-10">
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
            <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                <p className="my-auto flex items-center gap-1">
                    <Link to={`/pembimbing`}>Daftar Pembimbing</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <p>Detail Pembimbing</p>
                </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-3">
                <div className="bg-white p-5 rounded-lg shadow flex items-center">
                    {id_user && <img alt="foto-staff" onError={(e) => e.target.outerHTML = profilePlaceholder} src={url} className="bg-gray-500 w-28 h-28 rounded-full mx-5" />}
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
                <div className="bg-white p-4 rounded-lg shadow grid grid-cols-1 gap-3">
                    <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 my-auto mr-2 bg-purple-300 text-white p-2 rounded-lg">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">No Telepon</p>
                            <p className="text-lg -mb-1">{user.telepon}</p>
                        </div>
                    </div>
                    <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 my-auto mr-2 bg-slate-400 text-white p-2 rounded-lg">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">Email</p>
                            <p className="text-lg -mb-1">{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-3 shadow rounded mb-16">
                <table className="text-left table-auto w-full">
                    <thead>
                        <tr className="text-gray-500">
                            <th className="font-semibold p-3">No.</th>
                            <th className="font-semibold p-3">Nama</th>
                            <th className="font-semibold p-3">Asal Instansi</th>
                            <th className="font-semibold p-3 text-center">Status</th>
                            <th className="font-semibold p-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bimbingan.map((item, index) => (
                            <tr className="text-gray-900 border-t hover:bg-gray-100">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{item.nama}</td>
                                <td className="p-3">{item.asal_instansi}</td>
                                <td className="p-3">
                                    <div className="flex justify-center items-center">
                                        <div className={`px-3 py-2 font-semibold leading-tight ${item.status === "Aktif" ? "text-green-700 bg-green-200" : "text-red-700 bg-red-200"} text-lg rounded flex justify-center items-center`}>
                                            <p>{item.status}</p>
                                        </div>
                                    </div>
                                </td>
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
                </table>
            </div>
        </motion.div>
    )
}