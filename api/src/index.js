import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/pessoa', async (req, resp) => {
    try{
        let pessoas = await db.tb_lista_negra.findAll({ order: [['id']] })
        resp.send(pessoas);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})


app.post('/pessoa', async (req, resp) => {
    try{
        let {id_nome} = req.body;  
        let r = await db.tb_lista_negra.create({
            id_nome: id_nome
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})

app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))