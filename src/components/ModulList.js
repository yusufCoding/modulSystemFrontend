import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModulService from "../services/ModulService";

const ModulList = () => {

    const navigate = useNavigate();
    const [loading,setLoading]= useState(true);
    const [module, setModule] = useState(null);
    const [pflichts, setPflichts] = useState(null);

    useEffect(() => {
      const fetchData2 = async () => {
          setLoading(true);
          try {
               const response2 = await ModulService.getAllPflichts();
               setPflichts(response2.data);
          } catch(error) {
              console.log(error);
          }
          setLoading(false);
      };
      fetchData2();
   }, []);

    useEffect(() => {
       const fetchData = async () => {
           setLoading(true);
           try {
                const response = await ModulService.getAllModule();
                setModule(response.data);
           } catch(error) {
               console.log(error);
           }
           setLoading(false);
       };
       fetchData();
    }, []);

    const deleteModul = (e, id) => {
       e.preventDefault();
       ModulService.deleteModul(id).then((res) => {
         if(module) {
           setModule((prevElement) => {
             return prevElement.filter((modul) => modul.id !== id);
           })
         }
       });
    }
    
  return (
    <div>
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button onClick={() => navigate("/chooseModul")} className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Zurück
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Studiengang
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Startsemester
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Studienlänge
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Vertiefungsrichtung
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Einführungsmodule
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Praktikum
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                
              </th>
            </tr>
          </thead>
          {!loading && ( 
          <tbody className="bg-white">
              {module.map((modul) => ( 
            <tr key={modul.id}>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{modul.studiengang}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{modul.startsemester}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{modul.studienlaenge}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{modul.vertiefungsrichtung}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{modul.einfuehrungsmodule}</div>
              </td>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{modul.praktikum}</div>
              </td>
              <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">Bearbeiten</a>
                <a onClick={(e, id) => deleteModul(e, modul.id)} className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Löschen</a>
              </td>
            </tr>
            ))}
          </tbody>
          )}
        </table>
      </div>
    </div>

<div className="container mx-auto my-8">
<div className="flex shadow border-b">
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          Modulnummer
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          Modulname
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          CP
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          Angeboten
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          Semester
        </th>
        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
          
        </th>
      </tr>
    </thead>
    {!loading && ( 
    <tbody className="bg-white">
        {pflichts.map((pflicht) => ( 
      <tr key={pflicht.id}>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht.modnr}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht.modname}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht.cp}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht.sswsbo}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{pflicht.date}</div>
        </td>
        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
          <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">Bearbeiten</a>
        </td>
      </tr>
      ))}
    </tbody>
    )}
  </table>
</div>
</div>
</div>
  );
};

export default ModulList;
