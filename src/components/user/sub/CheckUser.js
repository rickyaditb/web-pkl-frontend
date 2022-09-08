import React, {useEffect, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "context/AuthContext";

export default function CheckUser() {
    const auth = useContext(AuthContext);
    const role = auth.role;

    const navigate = useNavigate();

    useEffect(() => {
        cekUser();
    }, [auth]);

    const cekUser = () => {
        if(role === "pembimbing") {
            navigate('/pembimbing')
        } else if (role === "admin") {
            navigate('/admin')
        }
    };
}