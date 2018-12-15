import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils.js';
import {serverPort} from '../etc/config.json';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.get('/products', (req,res) => {
	db.listProducts().then(data => res.send(data));
});

app.post('/products', (req,res) => {
	db.createProduct(req.body).then(data => res.send(data));
});

app.delete('/products/:id', (req,res) => {
	db.deleteProduct(req.params.id).then(data => res.send(data));
});

const server = app.listen(8080, () => {
	console.log('Port 8080 is listening!');
});