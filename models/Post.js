const mongoose = require('mongoose')


const postScheman = mongoose.Schema({
    title: { type: String, required: true}, //cambia "require:true" a "required: true"
    description: { type: String, required: true}, // camabia "require" a "required"
    date: { type: Date, default: Date.now} // asegurate de que la llave de cierre este en su lugar correcto
});

module.exports = mongoose.model('Post',postScheman);