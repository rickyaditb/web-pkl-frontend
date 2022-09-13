import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MainPresensiPembimbing() {
    const [presensi, setPresensi] = useState([]);

    useEffect(() => {
        getDetailLaporan();
    }, [])

    const getDetailLaporan = async () => {
        const response = await axios.get(`http://localhost:5000/presensi_detail`);
        setPresensi(response.data);
    };

    return (
        <div className="col-span-12 lg:col-span-10 mb-8">
            <div className="bg-white p-3 shadow rounded mb-16">
                <table className="text-left table-auto w-full">
                    <thead>
                        <tr className="text-gray-500">
                            <th className="font-semibold p-3">No.</th>
                            <th className="font-semibold p-3">Nama</th>
                            <th className="font-semibold p-3 text-center">Hadir</th>
                            <th className="font-semibold p-3 text-center">Terlambat</th>
                            <th className="font-semibold p-3 text-center">Sakit</th>
                            <th className="font-semibold p-3 text-center">Izin</th>
                            <th className="font-semibold p-3 text-center">Alpha</th>
                            <th className="font-semibold p-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {presensi.map((item, index) => (
                        <tr className="text-gray-900 border-t hover:bg-gray-100" key={item._id}>
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{item.nama}</td>
                            <td className="p-3 text-center">{item.hadir}</td>
                            <td className="p-3 text-center">{item.terlambat}</td>
                            <td className="p-3 text-center">{item.sakit}</td>
                            <td className="p-3 text-center">{item.izin}</td>
                            <td className="p-3 text-center">{item.alpha}</td>
                            <td className="p-3 text-center">
                                <div className="flex justify-center items-center">
                                    <Link to={`/presensi_pembimbing/${item._id}`} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                        </svg>
                                        <p className="ml-1">Detail Presensi</p>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}