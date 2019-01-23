import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

require('mongoose').Promise = global.Promise
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', (req: express.Request, res:express.Response) => {
    res.end("Configuração de rotas finalizada");
})

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"))
