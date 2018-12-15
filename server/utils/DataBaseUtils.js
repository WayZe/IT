import mongoose from 'mongoose';
import '../models/Model';
import {serverPort} from '../../etc/config.json';

const Product = mongoose.model('Model');

export function setUpConnection(){
	mongoose.connect('mongodb://localhost/products');
}

export function listProducts(){
	return Product.find();
}

export function createProduct(data){
	const product = new Product({
		name	: data.name,
		amount	: data.amount,
		date 	: data.date,
		cost 	: data.cost,
		createdAt: new Date()
	});

	return product.save();
}

export function deleteProduct(id){
	return Product.findById(id).remove();
}