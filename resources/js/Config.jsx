import axios from "axios";

const base_api_url = "http://127.0.0.1:8000/api/v1";
const base_api_url2 = "http://127.0.0.1:8000/api";

export default {
  getRegister: (data) => axios.post(`${base_api_url}/auth/register`, data),
  getLogin: (data) => axios.post(`${base_api_url}/auth/login`, data),
  getLogout: () => axios.post(`${base_api_url}/auth/logout`),
  
  getEmpresaStore: (data) => axios.post(`${base_api_url2}/subir/formempresa`, data),
  getJuegoStore: (data) => axios.post(`${base_api_url2}/subir/formjuego`, data),

  getAllEmpresa: (data) => axios.get(`${base_api_url2}/empresas`, data),
  getEmpresaUpdate: (data,id) => axios.put(`${base_api_url2}/empresas/edit/${id}`, data),
  getEmpresaDelete: (id) => axios.delete(`${base_api_url2}/empresas/delete/${id}`),
  getEmpresaId: (id) => axios.get(`${base_api_url2}/empresas/edit/${id}`),


  getAllJuego: (data) => axios.get(`${base_api_url2}/juegos`, data),
  getJuegoUpdate: (data,id) => axios.put(`${base_api_url2}/juegos/edit/${id}`, data),
  getJuegoDelete: (id) => axios.delete(`${base_api_url2}/juegos/delete/${id}`),
  getJuegoId: (id) => axios.get(`${base_api_url2}/juegos/edit/${id}`)
}