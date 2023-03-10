import mongoose from 'mongoose'

mongoose.connect("mongodb://127.0.0.1/hospitaldb")

.then(db=>console.log('conectado a la base de datos de mongo'))
.catch(error=>console.log(error))  