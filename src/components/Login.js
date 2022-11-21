import React, { useState, useEffect, useContext } from 'react'
import LoginImg from "./img/login.svg"
import Logo from './img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import RegisterContext from 'context/RegisterContext'
import { motion, AnimatePresence } from 'framer-motion';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setErrorMsg("")
    }, [email, password]);

    const pesan = useContext(RegisterContext);

    const loginUser = async (e) => {
        pesan.setBerhasilMsg("");
        setErrorMsg("");
        e.preventDefault();
        try {
            await axios.post('https://web-pkl-backend-b259363fx-rickyaditb.vercel.app/login', {
                email, password
            },);
            const response = await axios.get(`https://web-pkl-backend-b259363fx-rickyaditb.vercel.app/login/${email}`);
            if (response.data.role === "user") {
                navigate("/");
            } else if (response.data.role === "pembimbing") {
                navigate("/pembimbing");
            } else if (response.data.role === "admin") {
                navigate("/admin");
            } else {
                setErrorMsg("Terjadi kesalahan, harap hubungi Admin")
            }
            
        } catch (error) {
            setErrorMsg(error.response.data.message);
            pesan.setBerhasilMsg("")
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="container mx-auto p-5 md:grid grid-cols-2 h-screen bg-white">
            <div className="px-8 mx-auto mt-16 md:m-0 md:my-auto">
                <img src={LoginImg} />
            </div>
            <div className="mt-10 md:my-auto md:mx-16 transition duration-500" id="login">
                <img src={Logo} className="w-32 mx-auto mb-3 hidden md:block" />
                <form onSubmit={loginUser}>
                    <p className="text-center font-bold text-2xl text-gray-600 mb-3">Sistem Informasi Presensi<br/>Karyawan Magang</p>
                    <AnimatePresence>
                        {pesan.berhasilMsg ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className='bg-green-200 text-green-800 p-5 rounded my-2 font-semibold'>{pesan.berhasilMsg}</motion.div> : <></>}
                        {errorMsg ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className='bg-red-200 text-red-800 p-5 rounded my-2 font-semibold'>{errorMsg}</motion.div> : <></>}
                    </AnimatePresence>
                    <label htmlFor="email" className="text-gray-700">Email</label><br />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Masukan Email Anda"
                        className="bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none focus:bg-gray-200 transition duration-300" required/><br />
                    <label htmlFor="password" className="text-gray-700">Kata Sandi</label><br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Masukan Kata Sandi Anda"
                        className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none focus:bg-gray-200 transition duration-300" required/><br /><br />
                    <input type="submit" value="Masuk"
                        className="w-full py-3 rounded-lg text-white bg-utama font-bold hover:bg-sekunder transition cursor-pointer" required/>
                </form>
                <Link to={`/register`}>
                    <p className="text-center text-gray-500 mt-5 mb-10 sm:mb-0">Belum punya akun ?
                        Daftar Disini</p>
                </Link>
            </div>
        </motion.div>
    )
}