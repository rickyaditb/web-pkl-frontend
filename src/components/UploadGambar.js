import React, { useContext, useEffect, useState } from 'react'
import AuthContext from 'context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UploadGambar(props) {
    const user = useContext(AuthContext);
    const [foto, setFoto] = useState(null);
    var formData = new FormData();

    const kirim = async (e) => {
        e.preventDefault();
        formData.append("id_user", user.id);
        formData.append("image", foto);
        const id_user = 2;
        try {
            await axios.post('http://localhost:5000/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } catch (error) {
            console.log(error);
        }
        console.log(user)
    }
    return (
        <form method='POST' enctype="multipart/form-data" onSubmit={kirim}>
        <input type="file" name='image' onChange={e => {
          const file = e.target.files[0];
          setFoto(file);
        }}/><br/>
        <input type="submit" value="Upload" />
      </form>
    )
}