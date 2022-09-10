import React, { useState, useContext } from 'react'
import AuthContext from 'context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MainTambahLaporan() {
    const user = useContext(AuthContext);
    const id_user = user.id;

    const [tanggal_laporan, setTanggal] = useState("");
    const [isi_laporan, setIsi] = useState("");
    const navigate = useNavigate();

    const saveLaporan = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/laporan', {
                id_user, tanggal_laporan, isi_laporan
            });
            navigate("/laporan");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="col-span-12 lg:col-span-10">
            <div className="bg-white shadow rounded p-5 mb-10">
                <p className="text-center font-bold text-xl text-gray-600">Buat Laporan Baru</p>
                <form className="mt-3" action="laporan.html" onSubmit={saveLaporan}>
                    <label for="gambar" className="text-gray-700">Tanggal Laporan</label>
                    <input type="date" value={tanggal_laporan} onChange={(e) => setTanggal(e.target.value)} id="gambar" name="gambar" placeholder="Masukan Isi Laporan" className="gambar-form bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none" required/>
                    <label for="gambar" className="text-gray-700">Isi Laporan</label>
                    <textarea type="text" value={isi_laporan} onChange={(e) => setIsi(e.target.value)} id="gambar" name="gambar" rows="5" placeholder="Masukan Isi Laporan" className="gambar-form bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none" required></textarea>
                    <button className="py-3 px-3 rounded text-white bg-blue-400 font-bold cursor-pointer">Buat Laporan</button>
                </form>
            </div>
        </div>
    )
}