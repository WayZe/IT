import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name 	: { type: String, required:true },
	amount 	: { type: Number, required:true },
	date 	: { type: Date, required:true },
	cost 	: { type: Number, required:true }
});

const Product = mongoose.model('Model', ProductSchema);