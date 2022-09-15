import React, { useContext, useEffect } from 'react';
import AuthContext from 'context/AuthContext';
import { motion } from 'framer-motion';

export default function Pembimbing() {
    const user = useContext(AuthContext);
    return (
        <motion.div initial={{opacity: 0, scale: 1}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.3}} className="col-span-12 md:col-span-4 lg:col-span-3 mb-20">
            <div className="ml-3 text-xl font-bold text-gray-600 flex">
                <p>Pembimbing</p>
                <div className="flex my-auto ml-auto gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                    </svg>
                </div>
            </div>
            <div className="bg-white px-5 py-5 rounded-lg shadow transform transition duration-300 mt-3">
                <img src="https://randomuser.me/api/portraits/men/66.jpg" className="bg-gray-500 w-24 h-24 rounded-full mx-auto" />
                    <p className="text-center text-gray-700 mt-2 font-semibold text-lg">{user.pembimbing.nama}</p>
                    <div className="flex mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="p-1 rounded-lg h-7 w-7 my-auto bg-blue-400 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <p className="text-gray-700 my-auto ml-2">{user.pembimbing.telepon}</p>
                    </div>
                    <div className="flex mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="p-1 rounded-lg h-7 w-7 my-auto bg-yellow-400 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
                        </svg>
                        <p className="text-gray-700 my-auto ml-2">{user.pembimbing.email}</p>
                    </div>
            </div>
            <div className="bg-white text-gray-600 p-3 mt-3 font-bold rounded-lg shadow flex transform transition hover:bg-blue-100 duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-auto mr-2 bg-blue-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                <div className="border-l-2 pl-2 my-auto">
                    <p className="text-xs text-gray-500">Punya Pertanyaan ?</p>
                    <p className="text-lg -mb-1">Kirim Pesan</p>
                </div>
            </div>
        </motion.div>
    )
}