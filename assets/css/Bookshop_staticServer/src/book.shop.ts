import express from 'express';
import * as Library from './objekte';

console.log(Library)
const app = express();

const port = 3000;

app.get('/get-library', (_req, res) =>{
    let answer = {
        'library' : Library
    }
    res.send(answer);
})

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
    console.log('*** Server gestartet **');
    console.log('Erreichbar unter http://localhost/:' + port);
});