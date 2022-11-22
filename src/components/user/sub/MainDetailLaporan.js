import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import AuthContext from 'context/AuthContext';
import { useParams, Link, useNavigate } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/id';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

export default function MainDetailLaporan() {
    moment.locale('id');
    const [laporan, setLaporan] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalValue, setModalValue] = useState("");
    const [author, setAuthor] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    useEffect(() => {
        getLaporanById();
    }, []);

    const getLaporanById = async () => {
        const response = await axios.get(`https://web-pkl-backend.vercel.app/laporan/${id}`);
        setLaporan(response.data);
        setAuthor(response.data.id_user);
    }

    const showToastMessage = () => {
        toast.success('Laporan berhasil dihapus', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const deleteLaporan = async (id) => {
        try {
            await axios.delete(`https://web-pkl-backend.vercel.app/laporan/${id}`);
            setModal(false);
            navigate('/laporan')
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

    if (laporan.length === 0) {
        return <></>;
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="col-span-12 lg:col-span-10 mb-10">
            <AnimatePresence>
                {modal &&
                    <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className="bg-black/50 fixed inset-0 z-0 flex items-center justify-center">
                        <div>
                            <div className="bg-white px-8 py-8 rounded text-center">
                                <p className='font-bold text-2xl text-gray-800 mb-3'>Hapus Laporan ?</p>
                                <p className='text-lg'>Laporan yang sudah dihapus tidak akan bisa dikembalikan.</p>
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
                    <Link to={auth.role === "user" ? "/laporan" : `/laporan_pembimbing/${author}`}>Laporan Kegiatan</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <p>Detail Laporan Kegiatan</p>
                </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-16">
                <div className='col-span-3 md:col-span-1'>
                    <div className="bg-white p-3 rounded-lg shadow flex flex-col gap-3">
                        <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-auto mr-2 bg-blue-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                            </svg>
                            <div className="border-l-2 pl-2 my-auto">
                                <p className="text-xs text-gray-500">Tanggal Laporan</p>
                                <p className="text-lg -mb-1">{moment(laporan.tanggal_laporan).format('Do MMMM YYYY')}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/laporan/edit/${laporan._id}`} className="bg-white p-2 rounded-lg shadow flex flex-col gap-3 mt-1 hover:bg-orange-100 transition cursor-pointer">
                        <div className="text-gray-600 font-bold rounded-lg flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 my-auto mr-2 bg-orange-300 text-white p-2 rounded-lg">
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                            <div className="border-l-2 pl-2 my-auto">
                                <p className="text-lg -mb-1">Ubah Laporan</p>
                            </div>
                        </div>
                    </Link>
                    <div onClick={() => konfirmasi(laporan._id)} className="bg-white p-2 rounded-lg shadow flex flex-col gap-3 mt-1 hover:bg-red-100 transition cursor-pointer">
                        <div className="text-gray-600 font-bold rounded-lg flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 my-auto mr-2 bg-red-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                            </svg>
                            <div className="border-l-2 pl-2 my-auto">
                                <p className="text-lg -mb-1">Hapus Laporan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 md:col-span-2'>
                    <div className="bg-white p-3 rounded shadow">
                        <div className="bg-gray-200 p-3 rounded text-gray-700">{laporan.isi_laporan}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}