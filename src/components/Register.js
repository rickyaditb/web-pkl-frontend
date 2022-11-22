import React, { useState, useEffect, useContext } from 'react'
import Logo from './img/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RegisterContext from 'context/RegisterContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Register() {
    const [email, setEmail] = useState("");
    const [telepon, setTelepon] = useState("");
    const [nama, setNama] = useState("");
    const [asal_instansi, setInstansi] = useState("");
    const [role, setRole] = useState("user");
    const [tanggal_mulai, setMulai] = useState("");
    const [tanggal_selesai, setSelesai] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setPassword2] = useState("");
    const [pembimbing, setPembimbing] = useState("")
    const [pembimbingList, setPembimbingList] = useState([])
    const [errorMsg, setErrorMsg] = useState("")

    const navigate = useNavigate();

    const pesan = useContext(RegisterContext)

    useEffect(() => {
        setErrorMsg("")
    }, [email, password, confPassword]);

    useEffect(() => {
        if (asal_instansi === "Pengadilan Agama Bogor") {
            setRole("pembimbing")
        } else {
            setRole("user")
        }
    }, [asal_instansi]);

    useEffect(() => {
        getPembimbing();
    }, []);

    const daftarUser = async (e) => {
        setErrorMsg("");
        e.preventDefault();
        try {
            await axios.post('https://web-pkl-backend.vercel.app/user', {
                email, telepon, nama, asal_instansi, role, tanggal_mulai, tanggal_selesai, password, confPassword, pembimbing
            });
            pesan.setBerhasilMsg("Akun anda berhasil dibuat, silahkan masuk");
            navigate("/login");
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
    }

    const getPembimbing = async () => {
        const response = await axios.get(`https://web-pkl-backend.vercel.app/pembimbing`);
        setPembimbingList(response.data);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="bg-white">
            <form className="container lg:px-32 mx-auto p-5 h-screen" onSubmit={daftarUser}>
                <img src={Logo} className="w-32 mx-auto mb-3 block mt-3" />
                <p className="text-center font-bold text-2xl text-gray-600 mb-6">Sistem Informasi Presensi Karyawan Magang</p>
                <AnimatePresence>
                    {errorMsg ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }} className='bg-red-200 text-red-800 p-5 rounded mb-3 -mt-3 font-semibold'>{errorMsg}</motion.div> : <></>}
                </AnimatePresence>
                <div className="md:grid grid-cols-2 gap-5">
                    <div className="" id="login">
                        <div className="flex flex-col gap-3">
                            <div>
                                <label htmlFor="email" className="text-gray-700">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Masukan Email Anda" className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required />
                            </div>
                            <div>
                                <label htmlFor="nama" className="text-gray-700">Nama Lengkap</label>
                                <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} id="nama" name="nama" placeholder="Masukan Nama Anda" className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required />
                            </div>
                            <div>
                                <label htmlFor="asal_instansi" className="text-gray-700">Asal Instansi</label>
                                <input type="text" value={asal_instansi} onChange={(e) => setInstansi(e.target.value)} id="asal_instansi" name="asal_instansi" placeholder="Masukan Asal Instansi Anda" className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required />
                            </div>
                            {asal_instansi === "Pengadilan Agama Bogor" ? <></> :
                            <div>
                                <label htmlFor="asal_instansi" className="text-gray-700">Pembimbing</label>
                                <select value={pembimbing} onChange={(e) => setPembimbing(e.target.value)} className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required={asal_instansi === "Pengadilan Agama Bogor" ? false : true }>
                                    <option value="">Pilih Pembimbing Anda</option>
                                    {pembimbingList.map((item) => (
                                        <option value={item._id}>{item.nama}</option>
                                    ))}
                                </select>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="mt-3 md:mt-0" id="login">
                        <div className="flex flex-col gap-3">
                            <div>
                                <label htmlFor="telepon" className="text-gray-700">No. Telepon</label>
                                <input type="text" value={telepon} onChange={(e) => setTelepon(e.target.value)} id="telepon" name="telepon" placeholder="Masukan Nama Anda" className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required />
                            </div>
                            {asal_instansi === "Pengadilan Agama Bogor" ? <></> :
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="tanggal_mulai" className="text-gray-700">Tanggal Mulai</label>
                                    <input type="date" value={tanggal_mulai} onChange={(e) => setMulai(e.target.value)} id="tanggal_mulai" name="tanggal_mulai" className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required />
                                </div>
                                <div>
                                    <label htmlFor="tanggal_selesai" className="text-gray-700">Tanggal Selesai</label>
                                    <input type="date" value={tanggal_selesai} onChange={(e) => setSelesai(e.target.value)} id="tanggal_selesai" name="tanggal_selesai" className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required />
                                </div>
                            </div>
                            }
                            <div>
                                <label htmlFor="password" className="text-gray-700">Kata Sandi</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder="Masukan Kata Sandi Anda" className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required />
                            </div>
                            <div>
                                <label htmlFor="password2" className="text-gray-700">Konfirmasi Kata Sandi</label>
                                <input type="password" value={confPassword} onChange={(e) => setPassword2(e.target.value)} id="password2" name="password2" placeholder="Masukan Kembali Kata Sandi Anda" className="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none" required />
                            </div>
                            <div className="ml-auto mb-8 items-center gap-3 hidden md:flex">
                                <Link to={`/login`}>
                                    <p className="text-center text-gray-500">Sudah punya akun ?<br />
                                        Masuk Disini</p>
                                </Link>
                                <input type="submit" value="Buat Akun" className="px-5 py-3 rounded-lg text-white bg-utama font-bold hover:bg-sekunder transition cursor-pointer" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden mt-3 mb-8">
                    <input type="submit" value="Daftar" className="w-full px-5 py-3 rounded-lg text-white bg-utama font-bold cursor-pointer" required />
                    <Link to={`/login`}>
                        <p className="text-center text-gray-500 mt-3">
                            Sudah punya akun ? Masuk Disini
                        </p>
                    </Link>
                </div>
            </form>
            {pembimbing}
        </motion.div>
    )
}