import React, { useState, useContext, useEffect } from 'react'
import { useGeolocated } from "react-geolocated";
import GpsImg from './img/gps.svg'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/id';
import { MapContainer, TileLayer, useMap, Rectangle, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import AuthContext from 'context/AuthContext';
import marker from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import { motion, AnimatePresence } from 'framer-motion';

const myIcon = new Icon({
    iconUrl: marker
})

export default function MainDetailPresensi() {
    const user = useContext(AuthContext);

    const [modal, setModal] = useState(false);
    const [modalValue, setModalValue] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const id_user = user.id;

    const navigate = useNavigate();

    useEffect(() => {
        id_user && getPresensiToday();
    }, [id_user])

    const getPresensiToday = async () => {
        const response = await axios.get(`http://localhost:5000/presensi_today/${id_user}`);
        if(response.data) {
            navigate('/presensi')
        }
    };

    let waktu_absensi = moment();

    const savePresensi = async () => {
        let keterangan = modalValue;
        try {
            await axios.post('http://localhost:5000/presensi', {
                id_user, waktu_absensi, keterangan
            });
            navigate("/presensi");
        } catch (error) {
            setModalValue("");
            setModal(false);
            setErrorMsg(error.response.data.message);
        }
    }

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 100000,
        });

    const rectangle = [
        [-6.55693, 106.77489],
        [-6.55756, 106.77556],
    ]

    const konfirmasi = (value) => {
        setModalValue(value);
        setModal(true);
    }

    const batal = () => {
        setModalValue("");
        setModal(false);
    }

    const blackOptions = { color: 'purple' }

    return !isGeolocationAvailable ? (
        <motion.div initial={{opacity: 0, scale: 1.04}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.3}}>Peramban anda tidak mendukung Geolokasi</motion.div>
    ) : !isGeolocationEnabled ? (
        <div className="col-span-12 lg:col-span-10 mb-24">
            <div className="bg-white rounded p-10 grid grid-cols-2 shadow justify-items-center place-items-center">
                <img src={GpsImg} className="w-96" />
                <p className='text-3xl font-bold text-gray-700 text-center'>Mohon Aktifkan GPS Anda <br /> Untuk Melanjutkan</p>
            </div>
        </div>
    ) : coords ? (
        <motion.div initial={{opacity: 0, scale: 1.04}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.3}} className="col-span-12 lg:col-span-10">
            {errorMsg && <div className='bg-red-200 text-red-800 p-3 rounded mb-2 font-semibold'>{errorMsg}</div>}
            <AnimatePresence>
            {modal &&
                <motion.div initial={{opacity: 0, scale: 1.04}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.3}} exit={{opacity: 0}} className="bg-black/50 fixed inset-0 flex items-center justify-center z-30">
                    <div>
                        <div className="bg-white px-8 py-8 rounded text-center z-50 relative">
                            <p className='font-bold text-2xl text-gray-800 mb-3'>Konfirmasi Presensi</p>
                            <p className='text-lg'>Presensi yang sudah dikirim tidak akan bisa diubah.</p>
                            <div className="flex gap-5 mt-3 justify-center">
                                <button onClick={() => savePresensi()} className='bg-blue-100 text-blue-700 w-full rounded py-3 font-bold text-lg'>Ya, Kirim</button>
                                <button onClick={() => batal()} className='bg-red-100 text-red-700 w-full rounded py-3 font-bold text-lg'>Tidak, Kembali</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
            </AnimatePresence>
            <div className='bg-white p-5 grid md:grid-cols-2 -z-20 shadow mb-24'>
                <MapContainer className='z-10' center={[-6.5571255002408, 106.77520330650981]} zoom={18} scrollWheelZoom={false} style={{ width: "100%", height: "400px" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Rectangle bounds={rectangle} pathOptions={blackOptions}>
                        <Popup>
                            Lokasi Absensi
                        </Popup>
                    </Rectangle>
                    {coords &&
                        <Marker position={[coords.latitude, coords.longitude]} icon={myIcon}>
                            <Popup>
                                Lokasi Anda Saat Ini
                            </Popup>
                        </Marker>
                    }
                </MapContainer>
                <div className='flex items-center justify-center text-center ml-2 p-3'>
                    {coords &&
                        (() => {
                            if (coords.latitude > -6.55693 && coords.latitude < -6.55756)
                                return <div className=''>
                                    <p className='text-3xl text-gray-700 font-bold'>
                                        Anda tidak berada pada lokasi absensi yang ditentukan.
                                    </p>
                                    <div className="mt-3 flex justify-center gap-3">
                                        <button onClick={() => konfirmasi("Izin")} data-presensi="Izin" className="bg-yellow-400 font-bold text-2xl text-white px-6 py-3 rounded">Izin</button>
                                        <button onClick={() => konfirmasi("Sakit")} data-presensi="Sakit" className="bg-red-400 font-bold text-2xl text-white px-4 py-3 rounded">Sakit</button>
                                    </div>
                                </div>
                            if (coords.longitude > 106.77489 && coords.longitude < 106.77556)
                                return <div className=''>
                                    <p className='text-3xl text-gray-700 font-bold'>
                                        Anda sudah berada pada lokasi absensi yang ditentukan.
                                    </p>
                                    <div className="mt-3 flex justify-center gap-3">
                                        <button onClick={() => konfirmasi("Hadir")} data-presensi="Hadir" className="bg-green-400 font-bold text-2xl text-white px-4 py-3 rounded">Hadir</button>
                                        <button onClick={() => konfirmasi("Izin")} data-presensi="Izin" className="bg-yellow-400 font-bold text-2xl text-white px-6 py-3 rounded">Izin</button>
                                        <button onClick={() => konfirmasi("Sakit")} data-presensi="Sakit" className="bg-red-400 font-bold text-2xl text-white px-4 py-3 rounded">Sakit</button>
                                    </div>
                                </div>
                            else
                                return <div className=''>
                                    <p className='text-3xl text-gray-700 font-bold'>
                                        Anda tidak berada pada lokasi absensi yang ditentukan.
                                    </p>
                                    <div className="mt-3 flex justify-center gap-3">
                                    <button onClick={() => konfirmasi("Izin")} data-presensi="Izin" className="bg-yellow-400 font-bold text-2xl text-white px-6 py-3 rounded">Izin</button>
                                        <button onClick={() => konfirmasi("Sakit")} data-presensi="Sakit" className="bg-red-400 font-bold text-2xl text-white px-4 py-3 rounded">Sakit</button>
                                    </div>
                                </div>
                        })()
                    }
                </div>
            </div>
        </motion.div>
    ) : (
        <motion.div initial={{opacity: 0, scale: 1.04}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.3}} className="col-span-12 lg:col-span-10 mb-24">
            <div className="bg-white rounded p-10 grid grid-cols-1 md:grid-cols-2 shadow justify-items-center place-items-center">
                <img src={GpsImg} className="w-96" />
                <p className='text-3xl font-bold text-gray-700 text-center mt-8 md:mt-0'>Memuat Data Geolokasi <br /> Mohon Tunggu...</p>
            </div>
        </motion.div>
    );
}