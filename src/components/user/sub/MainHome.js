import React, { useContext, useEffect } from 'react'
import AuthContext from 'context/AuthContext';
import moment from 'moment';
import { motion } from 'framer-motion';

export default function MainHome() {
    const user = useContext(AuthContext);
    useEffect(() => {
        user.refreshToken();
    }, []);
    return (
        <motion.div initial={{opacity: 0, scale: 1.04}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.3}} className="col-span-12 md:col-span-8 lg:col-span-7 mb-64">
            <div className="bg-white p-5 rounded-lg shadow transform transition flex items-center">
                <img src="https://randomuser.me/api/portraits/men/79.jpg" className="bg-gray-500 w-28 h-28 rounded-full mx-5" />
                <div className="ml-5">
                    <div className="flex flex-col gap-1">
                        <div>
                            <p className="text-gray-500">Nama</p>
                            <p className="font-bold text-gray-600 text-xl">{user.nama}</p>
                        </div>
                        <div>
                            <p className="text-gray-500">Asal Instansi</p>
                            <p className="font-bold text-gray-600 text-xl">{user.instansi}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mt-3 grid grid-cols-2 gap-3">
                <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                    {user.status === "Aktif" ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-auto mr-2 bg-green-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg> : (user.status === "Non Aktif") ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 my-auto mr-2 bg-red-300 text-white p-2 rounded-lg">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-auto mr-2 bg-green-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                    }
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">Status</p>
                        <p className="text-lg -mb-1">{user.status}</p>
                    </div>
                </div>
                <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-auto mr-2 bg-orange-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">Nilai</p>
                        <p className="text-lg -mb-1">92%</p>
                    </div>
                </div>
                <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 my-auto mr-2 bg-purple-300 text-white p-2 rounded-lg">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">No Telepon</p>
                        <p className="text-lg -mb-1">{user.telepon}</p>
                    </div>
                </div>
                <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 my-auto mr-2 bg-slate-400 text-white p-2 rounded-lg">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-lg -mb-1">{user.email}</p>
                    </div>
                </div>
                <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-auto mr-2 bg-red-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">Tanggal Mulai</p>
                        <p className="text-lg -mb-1">{moment(user.tanggal_mulai).format('Do MMMM YYYY')}</p>
                    </div>
                </div>
                <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-auto mr-2 bg-blue-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">Tanggal Selesai</p>
                        <p className="text-lg -mb-1">{moment(user.tanggal_selesai).format('Do MMMM YYYY')}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}