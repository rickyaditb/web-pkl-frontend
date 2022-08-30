import React, { useState, useEffect } from 'react'
import LoginImg from "./sub/img/login.svg"
import Logo from './sub/img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setErrorMsg("")
    }, [email, password]);

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email, password
            },);
            navigate("/");
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
    }

    return (
        <div class="container mx-auto p-5 md:grid grid-cols-2 h-screen bg-white">
            <div class="px-8 mx-auto mt-16 md:m-0 md:my-auto">
                <img src={LoginImg} />
            </div>
            <div class="mt-10 md:my-auto md:mx-16 transition duration-500" id="login">
                <img src={Logo} class="w-32 mx-auto mb-3 hidden md:block" />
                <form onSubmit={loginUser}>
                    <p class="text-center font-bold text-2xl text-gray-600 mb-3">Sistem Informasi Staff Magang</p>
                    {errorMsg ? <div className='bg-red-200 text-red-800 p-5 rounded my-2 font-semibold'>{errorMsg}</div> : <></>}
                    <label for="email" class="text-gray-700">Email</label><br />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Masukan Email Anda"
                        class="bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none" /><br />
                    <label for="password" class="text-gray-700">Kata Sandi</label><br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Masukan Password Anda"
                        class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" /><br /><br />
                    <input type="submit" value="Masuk"
                        class="w-full py-3 rounded-lg text-white warna-main font-bold cursor-pointer" />
                </form>
                <Link to={`/register`}>
                    <p class="text-center text-gray-500 mt-5 mb-10 sm:mb-0" onclick="switchToRegister()">Belum punya akun ?
                        Daftar Disini</p>
                </Link>
            </div>
        </div >
    )
}