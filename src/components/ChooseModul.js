import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ModulService from '../services/ModulService';

const ChooseModul = () => {

    const navigate = useNavigate();

    const [modul, setModul] = useState({
        id: "",
        studiengang: "",
        startsemester: "",
        studienlaenge: "",
        verpflichtungsfach: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setModul({...modul, [e.target.name]: value});
    }

    const saveModul = (e) => {
        e.preventDefault();
        ModulService.saveModul(modul).then((response) => {
            console.log(response);
            navigate("/ModulList");
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>

            <div className='font-thin text-2xl tracking-wider'>
                <h1>Füllen Sie bitte die Tabelle aus</h1>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Studiengang</label>
                <input type={"text"} name="studiengang" value={modul.studiengang} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Startsemester</label>
                <input type={"text"} name="startsemester" value={modul.startsemester} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Studienlänge</label>
                <input type={"text"} name="studienlaenge" value={modul.studienlaenge} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Verpflichtungsfächer</label>
                <input type={"text"} name="verpflichtungsfach" value={modul.verpflichtungsfach} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 pt-4'>
                <button onClick={saveModul} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Weiter</button>
            </div>

        </div>
    </div>
  )
}

export default ChooseModul