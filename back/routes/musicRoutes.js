const express = require("express");
// const { saludo, mostrarInmuebles, mostrarInmuebleId, nuevoInmueble, registroUsuario, loginUsuario, editarInmueble, eliminarInmueble, filtrarInmueble } = require("../controllers/inmueblesControllers");
const routes = express.Router();
const { regUser, loginUser, filterGenere} = require("../controllers/musicControllers");


// const { runValidation } = require("../middleware/validator/index");
// const { verifyToken } = require("../middleware/auth/auth");

routes.post("/registro", regUser);
routes.post("/login", loginUser);
routes.post("/filter", filterGenere);


module.exports = routes;