import React, { useState, useEffect, useContext } from 'react';
import AuthContext from 'context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/id';
import noData from 'components/img/no-data.svg';

export default function MainLaporan() {
    const user = useContext(AuthContext);
    const id_user = user.id;

    moment.locale('id');
    const [laporan, setLaporan] = useState("x");
    const [modal, setModal] = useState(false)
    const [modalValue, setModalValue] = useState("")

    useEffect(() => {
        id_user && getLaporan();
    }, [id_user]);

    const getLaporan = async () => {
        const response = await axios.get(`http://localhost:5000/laporan_user/${id_user}`);
        setLaporan(response.data);
    };

    const deleteLaporan = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/laporan/${id}`);
            getLaporan();
            setModal(false);
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

    return (
        <div className="col-span-12 lg:col-span-10">
            {modal ?
                <div className="bg-black/50 fixed inset-0 z-0 flex items-center justify-center">
                    <div>
                        <div className="bg-white px-8 py-8 rounded text-center">
                            <p className='font-bold text-2xl text-gray-800 mb-3'>Hapus Laporan ?</p>
                            <p className='text-lg'>Laporan yang sudah dihapus tidak akan bisa dikembalikan.</p>
                            <div className="flex gap-5 mt-3 justify-center">
                                <button onClick={() => deleteLaporan(modalValue)} className='bg-red-100 text-red-700 w-full rounded py-3 font-bold text-lg'>Ya, Hapus</button>
                                <button onClick={() => batal()} className='bg-blue-100 text-blue-700 w-full rounded py-3 font-bold text-lg'>Tidak, Kembali</button>
                            </div>
                        </div>
                    </div>
                </div>
                : <></>
            }
            <div className="flex items-center mb-3 bg-white rounded shadow p-3">
                <p className="text-gray-600 font-bold text-xl ml-1">Riwayat Laporan Kegiatan</p>
                <Link to="/laporan/add" className="ml-auto bg-blue-400 px-3 py-2 rounded text-white text-base flex items-center gap-2 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                    </svg>
                    <p>Buat Laporan</p>
                </Link>
            </div>
            {(() => {
                if (laporan === "x")
                    return <></>
                if (laporan.length === 0)
                    return <div className='bg-white p-4 md:p-8 grid grid-cols-2 mb-16 shadow rounded justify-items-center content-center gap-3 md:gap-0'>
                        <img src={noData} alt="" className='w-64' />
                        <div className='flex items-center text-2xl md:text-4xl font-bold text-gray-700 text-center'>Data Laporan <br />Masih Kosong</div>
                    </div>
                else
                    return <div className="bg-white p-3 shadow rounded mb-24">
                        <table className="text-left table-auto w-full">
                            <thead>
                                <tr className="text-gray-500">
                                    <th className="font-semibold p-3">No.</th>
                                    <th className="font-semibold p-3">Tanggal Laporan</th>
                                    <th className="font-semibold p-3 text-center">Status</th>
                                    <th className="font-semibold p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {laporan.map((item, index) => (
                                    <tr className="text-gray-900 border-t hover:bg-gray-100" key={item._id}>
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{moment(item.tanggal_laporan).format('dddd, Do MMMM YYYY')}</td>
                                        <td className="p-3">
                                            <div className="flex justify-center items-center">
                                                <Link to={`/laporan/detail/${item._id}`} className="p-2 font-semibold leading-tight text-blue-700 bg-blue-100 text-sm rounded flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="ml-1">Lihat Laporan</p>
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex justify-center gap-2">
                                                <Link to={`/laporan/edit/${item._id}`} className="p-2 font-semibold leading-tight text-yellow-700 bg-yellow-100 text-sm rounded flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                        <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                                    </svg>
                                                    <p className="ml-1">Edit Laporan</p>
                                                </Link>
                                                <button onClick={() => konfirmasi(item._id)} className="p-2 font-semibold leading-tight text-red-700 bg-red-100 text-sm rounded flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                    </svg>
                                                    <p className="ml-1">Hapus Laporan</p>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            })()}

        </div>
    )
}