import React, { useState, useEffect } from 'react'
import { useGeolocated } from "react-geolocated";
import GpsImg from './img/gps.svg'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/id';
import { MapContainer, TileLayer, useMap, Rectangle, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function MainDetailPresensi() {

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 100000,
        });

    const rectangle = [
        [-6.55703, 106.77489],
        [-6.55756, 106.77546],
    ]


    const blackOptions = { color: 'black' }

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
                    <Rectangle bounds={rectangle} pathOptions={blackOptions} />
                </MapContainer>
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