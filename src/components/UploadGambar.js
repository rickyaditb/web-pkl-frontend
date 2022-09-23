import React, { useContext, useState } from 'react'
import AuthContext from 'context/AuthContext';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from 'components/user/sub/Header.js';
import Sidebar from 'components/Sidebar.js';
import Profile from 'components/user/sub/Profile.js';
import Bottombar from 'components/Bottombar.js';
import { motion } from 'framer-motion';

export default function UploadGambar(props) {
    const user = useContext(AuthContext);
    const [foto, setFoto] = useState(null);
    var formData = new FormData();
    const [errorMsg, setErrorMsg] = useState("");
    const [berhasil, setBerhasil] = useState("");

    const kirim = async (e) => {
        e.preventDefault();
        formData.append("id_user", user.id);
        formData.append("image", foto);
        try {
            await axios.post('http://localhost:5000/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            user.refreshToken();
            setBerhasil("Foto Profil berhasil diunggah");
            setErrorMsg("");
        } catch (error) {
            console.log(error);
            setErrorMsg("Terjadi Kesalahan!");
        }
    }
    return (
        <div>
            <Header kelas="hidden md:flex" />
            <div className="grid grid-cols-12 gap-3 mt-5">
                <Sidebar activePage="pengaturan" />
                <div className="col-span-12 md:col-span-8 lg:col-span-7">
                    <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                        <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold hidden md:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                            <p className="my-auto flex items-center gap-1">
                                <Link to={"/pengaturan"} className="cursor-pointer">Pengaturan</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                <p>Ganti Foto Profil</p>
                            </p>
                        </div>
                        <Link to={"/pengaturan"} className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold flex md:hidden cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-2 mt-0.5 text-gray-600">
                                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                            </svg>
                            <p className="my-auto flex items-center gap-1">
                                <p className="cursor-pointer">Kembali</p>
                            </p>
                        </Link>
                        <div className='bg-white mb-24 p-5 shadow'>
                            {errorMsg ? <div className='bg-red-200 text-red-800 p-3 rounded mb-4 font-semibold'>{errorMsg}</div> : <></>}
                            {berhasil ? <div className='bg-green-200 text-green-800 p-3 rounded mb-4 font-semibold'>{berhasil}</div> : <></>}
                            <form method='POST' enctype="multipart/form-data" onSubmit={kirim}>
                                <input type="file" name='image' accept="image/*" onChange={e => {
                                    const file = e.target.files[0];
                                    setFoto(file);
                                    setBerhasil("");
                                }} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" /><br />
                                <input type="submit" value="Unggah Foto Profil" className='warna-main text-white font-bold p-3 rounded w-full text-xl' />
                            </form>
                        </div>
                    </motion.div>
                </div>
                <Profile kelas="hidden md:block" />
            </div>
            <Bottombar activePage="pengaturan" />
        </div>
    )
}