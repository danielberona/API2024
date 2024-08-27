const express = require('express')

// importa los paquetes 

const app = express();

// depencia de la conexion 

const mongoose = require('mongoose')

// importacion del convertidor a JSON

const bodyparser = require('body-parser');

app.use(bodyparser.json());


// configuracion de las rutas post

const postRouter = require('./Rutas/post')


// ruta de navegacion pagina 

app.use('/servicios', postRouter);



//ruta de conexion base de datos

app.get('/',(req,res) => {
    res.send('preuba de la conexion del servidor todo OK')
})

mongoose.connect('mongodb+srv://sena:vB6LMmHMRcn5BRz9@cluster0.d88do.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{})

.then(() => {
    console.log('conectado a la base de datos')
})
.catch(err => {
    console.error('error al conectar a la base de datos',err);
})

app.listen(10000) 