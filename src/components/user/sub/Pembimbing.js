import React, { useContext, useState } from 'react';
import AuthContext from 'context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOMServer from 'react-dom/server';

export default function Pembimbing() {
    const user = useContext(AuthContext);
    const id_pembimbing = user.pembimbing._id;
    const gambar_pembimbing = user.pembimbing.gambar;

    let urlPembimbing = `https://web-pkl-backend.vercel.app/${id_pembimbing}${gambar_pembimbing}`;

    const profilePlaceholder = ReactDOMServer.renderToStaticMarkup(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bg-gray-500 p-3 text-white w-24 h-24 rounded-full mx-auto">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>)

    const [dropdown, setDropdown] = useState(true)

    const toggleDropdown = () => {
        setDropdown((prevDropdown) => (!prevDropdown))
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className={`col-span-12 md:col-span-4 lg:col-span-3 `}>
            <div className="ml-3 text-xl font-bold text-gray-600 flex">
                <p>Pembimbing</p>
                <motion.div animate={{ rotate: dropdown ? 0 : 180 }} onClick={toggleDropdown} className="flex my-auto ml-auto gap-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                    </svg>
                </motion.div>
            </div>
            <div className="bg-white px-5 py-5 rounded-lg shadow transform transition duration-300 mt-3">
                {id_pembimbing && <img alt="foto-staff" onError={(e) => e.target.outerHTML = profilePlaceholder} src={urlPembimbing} className="bg-gray-500 w-24 h-24 rounded-full mx-auto" />}
                <p className="text-center text-gray-700 mt-2 font-semibold text-lg">{user.pembimbing.nama}</p>
                <p className="text-center text-gray-700 ">{user.pembimbing.instansi}</p>
            </div>
            <AnimatePresence>
                {dropdown &&
                <motion.div initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0, scale: 0.9 }} className={`bg-white p-4 rounded-lg shadow mt-3 flex flex-col gap-3`}>
                    <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 my-auto mr-2 bg-slate-400 text-white p-2 rounded-lg">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">Email</p>
                            <p className="text-lg md:text-base -mb-1 break-all">{user.pembimbing.email}</p>
                        </div>
                    </div>
                    <div className="bg-white text-gray-600 font-bold rounded-lg flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 my-auto mr-2 bg-purple-300 text-white p-2 rounded-lg">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        <div className="border-l-2 pl-2 my-auto">
                            <p className="text-xs text-gray-500">No Telepon</p>
                            <p className="text-lg -mb-1">{user.pembimbing.telepon}</p>
                        </div>
                    </div>
                </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )
}