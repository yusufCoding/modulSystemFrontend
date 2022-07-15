import axios from "axios";

const MODUL_API_BASE_URL = "http://localhost:8080/api/v1/module";
const MODUL_API_GET_MODULE = "http://localhost:8080/api/v1/getAllModule"
const MODUL_API_GET_PFLICHTMODULE = "http://localhost:8080/api/v1/getAllPflichts"
const MODUL_API_DELETE_MODUL = "http://localhost:8080/api/v1/deleteModul"
const LOGIN_API = "http://localhost:8080/users"
const GETPFLICHTBYID_API = "http://localhost:8080/pflichts"
class ModulService {

    login(user) {
        return axios.post(LOGIN_API, user);
    }

    getAllPflichts() {
        return axios.get(MODUL_API_GET_PFLICHTMODULE);
    }

    saveModul(modul) {
        return axios.post(MODUL_API_BASE_URL, modul);
    }

    getAllModule() {
        return axios.get(MODUL_API_GET_MODULE);
    }

    deleteModul(id) {
        return axios.delete(MODUL_API_DELETE_MODUL + "/" + id);
    }

    getPflichtById(id) {
        return axios.get(GETPFLICHTBYID_API + "/" + id);
    }

    updatePflicht(pflicht, id) {
        return axios.put(GETPFLICHTBYID_API + "/" + id, pflicht);
    }
}

//1.53
export default new ModulService();