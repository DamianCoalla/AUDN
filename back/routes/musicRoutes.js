const express = require("express");
const routes = express.Router();
const {
  regUser,
  loginUser,
  filterGenere,
  getSongs,
  newPlaylist,
  getPlaylist,
  checkEmail,
} = require("../controllers/musicControllers");

const { runValidation } = require("../middlewares/validators/index");
const { verifyToken } = require("../middlewares/auth/auth");

routes.post("/register", regUser); //esto es para registro//
routes.post("/login", loginUser); //esto es para login//
routes.post("/checkemail", checkEmail) //controla que no exista el mail en user//

routes.get("/songs", verifyToken, runValidation, getSongs); //esto es para el buscador//

routes.post("/filter",verifyToken, runValidation, filterGenere); //para los botones de generos//

routes.post("/playlist",verifyToken, runValidation, newPlaylist); //para crear las playlist//

routes.get("/getPlaylist",verifyToken, runValidation, getPlaylist); //para traer las playlist//

module.exports = routes;
