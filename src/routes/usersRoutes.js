const express = require("express");

const router = express.Router()

const UsersController = require("../controllers/UsersController")

router.get('/login', UsersController.login);
router.get('/register', UsersController.register);
// agrego ruta para formulario de recuperación de contraseña
router.get('/recuperacionPass', UsersController.recuperacionPass);

module.exports = router

