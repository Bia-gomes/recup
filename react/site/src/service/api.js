import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:3030/'
})



export default class Api {

    async listar() {
        let r = await api.get('/pessoa');
        return r.data;
    }

    async inserir(nome) {
        let r = await api.post('/pessoa', {nome});
        return r.data;
    }
}