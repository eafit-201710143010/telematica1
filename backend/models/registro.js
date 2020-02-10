'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
	temp: Schema.Types.Decimal128,
	hume: Schema.Types.Decimal128,
	lat: Schema.Types.Decimal128,
	lng: Schema.Types.Decimal128
})

module.exports = mongoose.model('Registro', ProductSchema)