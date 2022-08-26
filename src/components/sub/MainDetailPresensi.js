import React, { useState, useEffect, useRef } from 'react'
import { useGeolocated } from "react-geolocated";
import GpsImg from './img/gps.svg'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/id';
import { MapContainer, TileLayer, useMap, Rectangle, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import marker from 'leaflet/dist/images/marker-icon.png';

import { Icon } from 'leaflet'

const myIcon = new Icon({
    iconUrl: marker
})



export default function MainDetailPresensi() {

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

    const blackOptions = { color: 'purple' }

    return !isGeolocationAvailable ? (
        <div>Peramban anda tidak mendukung Geolokasi</div>
    ) : !isGeolocationEnabled ? (
        <div className="col-span-12 lg:col-span-10">
            <div className="bg-white rounded p-10 grid grid-cols-2 shadow justify-items-center place-items-center">
                <img src={GpsImg} className="w-96" />
                <p className='text-3xl font-bold text-gray-700 text-center'>Mohon Aktifkan GPS Anda <br /> Untuk Melanjutkan</p>
            </div>
        </div>
    ) : coords ? (
        <div className="col-span-12 lg:col-span-10">
            <div className=' bg-white p-5 grid grid-cols-2'>
                <MapContainer center={[-6.5571255002408, 106.77520330650981]} zoom={18} scrollWheelZoom={false} style={{ width: "100%", height: "400px" }}>
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
                                return <span>Terjadi Kesalahan</span>
                            if (coords.longitude > 106.77489 && coords.longitude < 106.77556)
                                return <span>Oke</span>
                            else
                                return <p className='text-3xl text-gray-700 font-bold'>Anda tidak berada pada lokasi absensi yang ditentukan.</p>
                        })()
                    }
                </div>
            </div>
        </div>
    ) : (
        <div className="col-span-12 lg:col-span-10">
            <div className="bg-white rounded p-10 grid grid-cols-1 md:grid-cols-2 shadow justify-items-center place-items-center">
                <img src={GpsImg} className="w-96" />
                <p className='text-3xl font-bold text-gray-700 text-center mt-8 md:mt-0'>Memuat Data Geolokasi <br /> Mohon Tunggu...</p>
            </div>
        </div>
    );
}