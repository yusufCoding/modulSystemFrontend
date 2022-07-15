import ModulService from "../services/ModulService";
import React, { useState } from 'react'
import ChooseModul from "./ChooseModul";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        password:""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value});
    }

    const login = (e) => {
        e.preventDefault();
        ModulService.login(user).then((response) => {
            console.log(response);
            navigate("/chooseModul");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className='flex max-w-2xl mx-auto shadow border-b'>
            <div className='px-8 py-8'>
    
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Loggen Sie sich bitte ein!</h1>
                </div>
    
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Name</label>
                    <input type={"text"} name="name" value={user.name} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>
    
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Password</label>
                    <input type={"password"} name="password" value={user.password} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>
    
                </div>
    
                <div className='items-center justify-center h-14 w-full my-4 pt-4'>
                    <button onClick={login} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Einloggen</button>
                </div>
    
            </div>
        
      )
}

export default Login