import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModulService from "../services/ModulService";

const ModulList = () => {

    const navigate = useNavigate();
    const [loading,setLoading]= useState(true);
    const [module, setModule] = useState(null);

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
                Verpflichtungsfächer
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
                <div className="text-sm text-gray-500">{modul.verpflichtungsfach}</div>
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
  );
};

export default ModulList;
