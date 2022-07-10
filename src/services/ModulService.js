import axios from "axios";

const MODUL_API_BASE_URL = "http://localhost:8080/api/v1/module";
const MODUL_API_GET_MODULE = "http://localhost:8080/api/v1/getAllModule"
const MODUL_API_DELETE_MODUL = "http://localhost:8080/api/v1/deleteModul"
class ModulService {

    saveModul(modul) {
        return axios.post(MODUL_API_BASE_URL, modul);
    }

    getAllModule() {
        return axios.get(MODUL_API_GET_MODULE);
    }

    deleteModul(id) {
        return axios.delete(MODUL_API_DELETE_MODUL + "/" + id);
    }
}

//1.53
export default new ModulService();