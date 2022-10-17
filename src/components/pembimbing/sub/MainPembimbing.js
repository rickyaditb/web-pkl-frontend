import React, { useState, useEffect, useContext } from 'react';
import AuthContext from 'context/AuthContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactDOMServer from 'react-dom/server';
import noData from 'components/img/no-data.svg';

export default function MainPembimbing() {
    const [user, setUser] = useState([]);
    const [aktif, setAktif] = useState("Loading");
    const [nonAktif, setNonAktif] = useState("Loading");
    const [tab, setTab] = useState('Aktif');

    const auth = useContext(AuthContext);

    useEffect(() => {
        auth && getUser();
    }, [auth]);

    const getUser = async () => {
        const response = await auth.axiosJWT.get(`http://localhost:5000/user_pembimbing/${auth.id}`, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        });
        setUser(response.data);
    };

    useEffect(() => {
        if (user.length > 1) {
            let aktifContainer = [];
            let nonContainer = [];
            user.map((item, index) => {
                if (item.status === "Aktif") {
                    aktifContainer.push({ ...item })
                } else if (item.status === "Non Aktif") {
                    nonContainer.push({ ...item })
                }
            });
            setAktif(aktifContainer);
            setNonAktif(nonContainer);
        }
    }, [user]);

    const switchToNon = () => {
        setTab("Non")
    }

    const switchToAktif = () => {
        setTab("Aktif")
    }

    const profilePlaceholder = ReactDOMServer.renderToStaticMarkup(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bg-gray-500 p-3 text-white w-28 h-28 rounded-full mx-5">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>)

    return (
        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="col-span-12 md:col-span-8 lg:col-span-7 mb-1 md:mb-16">
            <div class="text-lg font-bold text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-white shadow mb-3">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2 cursor-pointer" onClick={switchToAktif}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Aktif" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`} aria-current="page">Staff Dibimbing Aktif</p>
                    </li>
                    <li class="mr-2 cursor-pointer" onClick={switchToNon}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "Non" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`}>Staff Dibimbing Non Aktif</p>
                    </li>
                    <Link class="mr-2 cursor-pointer" to={"/admin"}>
                        <p class={`inline-block p-4 rounded-t-lg border-b-2 ${tab === "x" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`}>Semua Staff</p>
                    </Link>
                </ul>
            </div>
            {tab === "Aktif" &&
                <div>
                    {aktif === "Loading" ?
                        <></> :
                        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="flex flex-col gap-3">
                            {aktif.length > 0 ?
                                <div className="flex flex-col gap-3">
                                    {aktif.map((item, index) => (
                                        <Link to={`/profile/${item._id}`} key={item._id} className="bg-white p-5 rounded-lg shadow transform transition flex items-center">
                                            <img alt="foto-staff" onError={(e) => e.target.outerHTML = profilePlaceholder} src={`http://localhost:5000/${item._id}${item.gambar}`} className="bg-gray-500 w-28 h-28 rounded-full mx-5" />
                                            <div className="ml-5">
                                                <div className="flex flex-col gap-1">
                                                    <div>
                                                        <p className="text-gray-500">Nama</p>
                                                        <p className="font-bold text-gray-600 text-xl">{item.nama}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500">Asal Instansi</p>
                                                        <p className="font-bold text-gray-600 text-xl">{item.asal_instansi}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div> :
                                <div className='bg-white shadow rounded p-4 md:p-8 grid justify-items-center content-center gap-3 md:gap-0'>
                                    <img src={noData} alt="" className='w-64' />
                                    <div className='flex items-center mt-5 text-4xl font-bold text-gray-700 text-center'>Data Staff Aktif <br />Kosong</div>
                                </div>
                            }
                        </motion.div>
                    }
                </div>
            }
            {tab === "Non" &&
                <div>
                    {nonAktif === "Loading" ?
                        <></> :
                        <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                            {nonAktif.length > 0 ?
                                <div className="flex flex-col gap-3">
                                    {nonAktif.map((item, index) => (
                                        <Link to={`/profile/${item._id}`} key={item._id} className="bg-white p-5 rounded-lg shadow transform transition flex items-center">
                                            <img alt="foto-staff" onError={(e) => e.target.outerHTML = profilePlaceholder} src={`http://localhost:5000/${item._id}${item.gambar}`} className="bg-gray-500 w-28 h-28 rounded-full mx-5" />
                                            <div className="ml-5">
                                                <div className="flex flex-col gap-1">
                                                    <div>
                                                        <p className="text-gray-500">Nama</p>
                                                        <p className="font-bold text-gray-600 text-xl">{item.nama}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500">Asal Instansi</p>
                                                        <p className="font-bold text-gray-600 text-xl">{item.asal_instansi}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div> :
                                <div className='bg-white shadow rounded p-4 md:p-8 grid justify-items-center content-center gap-3 md:gap-0'>
                                    <img src={noData} alt="" className='w-64' />
                                    <div className='flex items-center mt-5 text-4xl font-bold text-gray-700 text-center'>Data Staff Non Aktif <br />Kosong</div>
                                </div>
                            }
                        </motion.div>
                    }
                </div>
            }
        </motion.div>
    )
}