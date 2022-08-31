import React, { useState, useEffect } from 'react'
import Logo from './sub/img/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState("");
    const [nama, setNama] = useState("");
    const [asal_instansi, setInstansi] = useState("");
    const [role, setRole] = useState("user");
    const [tanggal_mulai, setMulai] = useState("");
    const [tanggal_selesai, setSelesai] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setPassword2] = useState("");
    const [errorMsg, setErrorMsg] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        setErrorMsg("")
    }, [email, password, confPassword]);

    const daftarUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/user', {
                email, nama, asal_instansi, role, tanggal_mulai, tanggal_selesai, password, confPassword
            });
            navigate("/login");
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
    }

    return (
        <div className="bg-white">
            <form class="container lg:px-32 mx-auto p-5 h-screen" onSubmit={daftarUser}>
                <img src={Logo} class="w-32 mx-auto mb-3 block mt-3" />
                <p class="text-center font-bold text-2xl text-gray-600 mb-6">Sistem Informasi Staff Magang</p>
                {errorMsg ? <div className='bg-red-200 text-red-800 p-5 rounded mb-3 -mt-3 font-semibold'>{errorMsg}</div> : <></>}
                <div className="md:grid grid-cols-2 gap-5">
                    <div class="" id="login">
                        <div className="flex flex-col gap-3">
                            <div>
                                <label for="email" class="text-gray-700">Email</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Masukan Email Anda" class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required/>
                            </div>
                            <div>
                                <label for="nama" class="text-gray-700">Nama Lengkap</label>
                                <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} id="nama" name="nama" placeholder="Masukan Nama Anda" class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required/>
                            </div>
                            <div>
                                <label for="asal_instansi" class="text-gray-700">Asal Instansi</label>
                                <input type="text" value={asal_instansi} onChange={(e) => setInstansi(e.target.value)} id="asal_instansi" name="asal_instansi" placeholder="Masukan Asal Instansi Anda" class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required/>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 md:mt-0" id="login">
                        <div className="flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label for="tanggal_mulai" class="text-gray-700">Tanggal Mulai</label>
                                    <input type="date" value={tanggal_mulai} onChange={(e) => setMulai(e.target.value)} id="tanggal_mulai" name="tanggal_mulai" class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required/>
                                </div>
                                <div>
                                    <label for="tanggal_selesai" class="text-gray-700">Tanggal Selesai</label>
                                    <input type="date" value={tanggal_selesai} onChange={(e) => setSelesai(e.target.value)} id="tanggal_selesai" name="tanggal_selesai" class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required/>
                                </div>
                            </div>
                            <div>
                                <label for="password" class="text-gray-700">Kata Sandi</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Masukan Kata Sandi Anda" class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required/>
                            </div>
                            <div>
                                <label for="password2" class="text-gray-700">Konfirmasi Kata Sandi</label>
                                <input type="password" value={confPassword} onChange={(e) => setPassword2(e.target.value)} id="password2" name="password2" placeholder="Masukan Kembali Kata Sandi Anda" class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required/>
                            </div>
                            <div className="ml-auto items-center gap-3 hidden md:flex">
                                <Link to={`/login`}>
                                    <p class="text-center text-gray-500">Sudah punya akun ?<br/>
                                        Masuk Disini</p>
                                </Link>
                                <input type="submit" value="Daftar" class="px-5 py-3 rounded-lg text-white warna-main font-bold cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden mt-3 mb-16">
                    <input type="submit" value="Daftar" class="w-full px-5 py-3 rounded-lg text-white warna-main font-bold cursor-pointer" />
                    <Link to={`/login`}>
                        <p class="text-center text-gray-500 mt-3">
                            Sudah punya akun ? Masuk Disini
                        </p>
                    </Link>
                </div>
            </form>
        </div>
    )
}