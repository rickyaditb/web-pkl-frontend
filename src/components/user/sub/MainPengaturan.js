import React, { useState, useContext } from 'react'
import AuthContext from 'context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainPengaturan(props) {
    const [menu, setMenu] = useState("main");
    const [email, setEmail] = useState("");
    const [telepon, setTelepon] = useState("");
    const [passwordLama, setPasswordLama] = useState("");
    const [passwordBaru, setPasswordBaru] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [berhasil, setBerhasil] = useState("");
    const navigate = useNavigate();

    const user = useContext(AuthContext);
    const _id = user.id;

    const Logout = async() => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    const editEmail = async (e) => {
        setBerhasil("");
        setErrorMsg("");
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/email/${_id}`, {
                email
            });
            user.refreshToken();
            setBerhasil("Email berhasil diubah");
            setErrorMsg("");
        } catch (error) {
            setErrorMsg(error.response.data.message);
            setBerhasil("");
        }
    }

    const editTelepon = async (e) => {
        setBerhasil("");
        setErrorMsg("");
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/telepon/${_id}`, {
                telepon
            });
            user.refreshToken();
            setBerhasil("Nomor telepon berhasil diubah");
            setErrorMsg("");
        } catch (error) {
            setErrorMsg(error.response.data.message);
            setBerhasil("");
        }
    }

    const editPassword = async (e) => {
        setBerhasil("");
        setErrorMsg("");
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/password/${_id}`, {
                passwordLama, passwordBaru
            });
            user.refreshToken();
            setBerhasil("Kata Sandi berhasil diubah");
            setErrorMsg("");
        } catch (error) {
            setErrorMsg(error.response.data.message);
            setBerhasil("");
        }
    }

    const kembali = () => {
        setMenu("main");
        setBerhasil("");
        setErrorMsg("");
        setEmail("");
        setTelepon("");
        setPasswordLama("");
        setPasswordBaru("");
    }

    return (
        <div className="col-span-12 md:col-span-8 lg:col-span-7 transition duration-300 ease-in mb-24">
            {menu === "main" ?
                <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="bg-white p-5 rounded shadow">
                    <Link to={'/gambar'} className='font-bold text-gray-600 text-xl flex items-center gap-2 mb-4 pb-3 border-b-2 border-gray-200 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                        <p>Ubah Foto Profil</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5 ml-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <div className='font-bold text-gray-600 text-xl flex items-center gap-2 mb-4 pb-3 border-b-2 border-gray-200 cursor-pointer' onClick={() => { setMenu("email") }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        <p>Ubah Email</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5 ml-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <div className='font-bold text-gray-600 text-xl flex items-center gap-2 mb-4 pb-3 border-b-2 border-gray-200 cursor-pointer' onClick={() => { setMenu("telepon") }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        <p>Ubah Nomor Telepon</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5 ml-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <div className='font-bold text-gray-600 text-xl flex items-center gap-2 cursor-pointer' onClick={() => { setMenu("password") }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
                        </svg>
                        <p>Ubah Kata Sandi</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5 ml-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </motion.div> :
                <></>
            }
            {menu === "password" ?
                <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                    <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold hidden md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                        <p className="my-auto flex items-center gap-1">
                            <p onClick={kembali} className="cursor-pointer">Pengaturan</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            <p>Ubah Kata Sandi</p>
                        </p>
                    </div>
                    <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold flex md:hidden cursor-pointer" onClick={kembali}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-2 mt-0.5 text-gray-600">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                        </svg>
                        <p className="my-auto flex items-center gap-1">
                            <p className="cursor-pointer">Kembali</p>
                        </p>
                    </div>
                    <div className='bg-white p-5 rounded shadow'>
                        <AnimatePresence>
                            {errorMsg ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className='bg-red-200 text-red-800 p-3 rounded mb-2 font-semibold'>{errorMsg}</motion.div> : <></>}
                            {berhasil ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className='bg-green-200 text-green-800 p-3 rounded mb-2 font-semibold'>{berhasil}</motion.div> : <></>}
                        </AnimatePresence>
                        <form onSubmit={editPassword}>
                            <label for="password-lama" className='text-gray-700'>Kata Sandi Lama</label>
                            <input type="password" value={passwordLama} onChange={(e) => setPasswordLama(e.target.value)} id="password-lama" placeholder='Masukan Kata Sandi Lama' className='w-full bg-gray-100 p-3' required />
                            <label for="password-baru" className='text-gray-700'>Kata Sandi Baru</label>
                            <input type="password" value={passwordBaru} onChange={(e) => setPasswordBaru(e.target.value)} id="password-lama" placeholder='Masukan Kata Sandi Baru' className='w-full bg-gray-100 p-3' required />
                            <button className='bg-utama hover:bg-sekunder transition cursor-pointer text-white font-bold p-3 rounded mt-3 w-full text-xl'>Ubah Kata Sandi</button>
                        </form>
                    </div>
                </motion.div> : <></>
            }
            {menu === "email" ?
                <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                    <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold hidden md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                        <p className="my-auto flex items-center gap-1">
                            <p onClick={kembali} className="cursor-pointer">Pengaturan</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            <p>Ubah Email</p>
                        </p>
                    </div>
                    <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold flex md:hidden cursor-pointer" onClick={kembali}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-2 mt-0.5 text-gray-600">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                        </svg>
                        <p className="my-auto flex items-center gap-1">
                            <p className="cursor-pointer">Kembali</p>
                        </p>
                    </div>
                    <div className='bg-white p-5 rounded shadow'>
                        <AnimatePresence>
                            {errorMsg ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className='bg-red-200 text-red-800 p-3 rounded mb-2 font-semibold'>{errorMsg}</motion.div> : <></>}
                            {berhasil ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className='bg-green-200 text-green-800 p-3 rounded mb-2 font-semibold'>{berhasil}</motion.div> : <></>}
                        </AnimatePresence>
                        <form onSubmit={editEmail}>
                            <label for="email" className='text-gray-700'>Email Baru</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name='email' placeholder='Masukan Email Baru' className='w-full bg-gray-100 p-3' required />
                            <button className='bg-utama hover:bg-sekunder transition cursor-pointer text-white font-bold p-3 rounded mt-3 w-full text-xl'>Ubah Email</button>
                        </form>
                    </div>
                </motion.div> : <></>
            }
            {menu === "telepon" ?
                <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                    <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold hidden md:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                        <p className="my-auto flex items-center gap-1">
                            <p onClick={kembali} className="cursor-pointer">Pengaturan</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                            <p>Ubah Nomor Telepon</p>
                        </p>
                    </div>
                    <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold flex md:hidden cursor-pointer" onClick={kembali}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-2 mt-0.5 text-gray-600">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                        </svg>
                        <p className="my-auto flex items-center gap-1">
                            <p className="cursor-pointer">Kembali</p>
                        </p>
                    </div>
                    <div className='bg-white p-5 rounded shadow'>
                        <AnimatePresence>
                            {errorMsg ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className='bg-red-200 text-red-800 p-3 rounded mb-2 font-semibold'>{errorMsg}</motion.div> : <></>}
                            {berhasil ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className='bg-green-200 text-green-800 p-3 rounded mb-2 font-semibold'>{berhasil}</motion.div> : <></>}
                        </AnimatePresence>
                        <form onSubmit={editTelepon}>
                            <label for="number" className='text-gray-700'>Nomor Telepon Baru</label>
                            <input type="number" value={telepon} onChange={(e) => setTelepon(e.target.value)} id="telepon" name='telepon' placeholder='Masukan No. Telepon Baru' className='w-full bg-gray-100 p-3' required />
                            <button className='bg-utama hover:bg-sekunder transition cursor-pointer text-white font-bold p-3 rounded mt-3 w-full text-xl'>Ubah Nomor Telepon</button>
                        </form>
                    </div>
                </motion.div> : <></>
            }
            {menu === "main" ?
                <motion.div initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className='mt-3 bg-red-400 hover:bg-red-500 transition text-white font-bold p-3 rounded text-xl flex items-center gap-2 justify-center lg:hidden cursor-pointer' onClick={Logout}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <p>Keluar</p>
                </motion.div> : <></>
            }
        </div>
    )
}