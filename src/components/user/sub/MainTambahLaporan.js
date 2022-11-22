import React, { useState, useContext } from 'react'
import AuthContext from 'context/AuthContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function MainTambahLaporan() {
    const user = useContext(AuthContext);
    const id_user = user.id;

    const [tanggal_laporan, setTanggal] = useState("");
    const [isi_laporan, setIsi] = useState("");
    const navigate = useNavigate();

    const showToastMessage = () => {
        toast.success('Laporan berhasil dibuat', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const saveLaporan = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://web-pkl-backend.vercel.app/laporan', {
                id_user, tanggal_laporan, isi_laporan
            });
            navigate("/laporan");
            showToastMessage();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.div initial={{opacity: 0, scale: 1.04}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.3}} className="col-span-12 lg:col-span-10 mb-16">
            <div className="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                <p className="my-auto flex items-center gap-1">
                    <Link to={"/laporan"}>Laporan Kegiatan</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <p>Buat Laporan Baru</p>
                </p>
            </div>
            <div className="bg-white shadow rounded p-5 mb-10">
                <p className="text-center font-bold text-xl text-gray-600">Buat Laporan Baru</p>
                <form className="mt-3" action="laporan.html" onSubmit={saveLaporan}>
                    <label for="gambar" className="text-gray-700">Tanggal Laporan</label>
                    <input type="date" value={tanggal_laporan} onChange={(e) => setTanggal(e.target.value)} id="gambar" name="gambar" placeholder="Masukan Isi Laporan" className="gambar-form bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none" required />
                    <label for="gambar" className="text-gray-700">Isi Laporan</label>
                    <textarea type="text" value={isi_laporan} onChange={(e) => setIsi(e.target.value)} id="gambar" name="gambar" rows="5" placeholder="Masukan Isi Laporan" className="gambar-form bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none" required></textarea>
                    <button className="py-3 px-3 rounded text-white bg-blue-400 font-bold cursor-pointer">Buat Laporan</button>
                </form>
            </div>
        </motion.div>
    )
}