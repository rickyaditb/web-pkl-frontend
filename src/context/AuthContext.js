import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [id, setId] = useState('');
    const [nama, setNama] = useState('');
    const [instansi, setInstansi] = useState('');
    const [tanggal_mulai, setMulai] = useState('');
    const [tanggal_selesai, setSelesai] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token')
            setToken(response.data.accessToken)
            const decoded = jwt_decode(response.data.accessToken);
            setId(decoded.userId);
            setNama(decoded.nama);
            setInstansi(decoded.instansi);
            setExpire(decoded.exp);
            setMulai(decoded.tanggal_mulai);
            setSelesai(decoded.tanggal_selesai);
            setRole(decoded.role);
        } catch (error) {
            if (error.response) {
                navigate("/login");
            }
        }
    }
    const axiosJWT = axios.create();
    
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setId(decoded.userId);
            setNama(decoded.nama);
            setInstansi(decoded.instansi);
            setExpire(decoded.exp);
            setMulai(decoded.tanggal_mulai);
            setSelesai(decoded.tanggal_selesai);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    return (
        <AuthContext.Provider value={{id, nama, instansi, tanggal_mulai, tanggal_selesai, token, refreshToken, axiosJWT, role}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;