'use strict'

const Registro = require('../models/registro')

function getRegistros (req, res) {
	Registro.find({}, (err, registros) => {
		if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if(!registros) return res.status(404).send({message: `No existen registros`})

		res.status(200).send({registros})
	})
}

function postRegistro (req, res) {
	console.log('POST /api/registros')
	console.log(req.body)
	//res.status(200).send({message:'OK'})

	let registro = new Registro()
	registro.temp = req.body.temp
	registro.hume = req.body.hume
	registro.lat = req.body.lat
	registro.lng = req.body.lng

	registro.save((err, registroGuardado) => {
		if(err) res.status(500).send({message: `error al guardar: ${err}`})

		res.status(200).send({registro: registroGuardado})
	})
}

module.exports = {
	getRegistros,
	postRegistro
}