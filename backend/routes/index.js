'use strict'

const express = require('express')
const api = express.Router()

const RegistroCtrl = require('../controllers/registro')

api.get('/registros', RegistroCtrl.getRegistros)
api.post('/registros', RegistroCtrl.postRegistro)

module.exports = api