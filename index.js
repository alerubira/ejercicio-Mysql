const express = require('express');
//import{express}from'express';
const app = express();
const path = require('path');
//import{path}from'path';
//import{conectar}from'conexionBD';
const conectarBD=require('./conexionBD');
//conectarBD();
// Configurar el motor de vistas Pug
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('principal.pug');
  });
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
  });

  