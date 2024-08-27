const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// inser de datos 
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
      // validacion de errores de grabar en mongo
    try {
        const savedpost = await post.save();
        res.json(savedpost);
    } catch (error) {
        res.json({ message: error});
    }
});
// importante agregar las rutas 
module.exports = router;