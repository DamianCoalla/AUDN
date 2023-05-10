const express = require("express");
// const { saludo, mostrarInmuebles, mostrarInmuebleId, nuevoInmueble, registroUsuario, loginUsuario, editarInmueble, eliminarInmueble, filtrarInmueble } = require("../controllers/inmueblesControllers");
const routes = express.Router();
const {
  regUser,
  loginUser,
  filterGenere,
  getSongs,
  newPlaylist,
  getPlaylist,
} = require("../controllers/musicControllers");

// const { runValidation } = require("../middleware/validator/index");
// const { verifyToken } = require("../middleware/auth/auth");

routes.post("/registro", regUser); //esto es para registro//
routes.post("/login", loginUser); //esto es para login//

routes.get("/songs", getSongs); //esto es para el buscador//

routes.post("/filter", filterGenere); //para los botones de generos//

routes.post("/playlist", newPlaylist); //para crear las playlist//

routes.get("/getPlaylist", getPlaylist);

module.exports = routes;
