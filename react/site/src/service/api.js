import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:3030/'
})



export default class Api {

    async listar() {
        let r = await api.get('/pessoa');
        return r.data;
    }

    async inserir(id_nome) {
        let r = await api.post('/pessoa', {id_nome});
        return r.data;
    }
}