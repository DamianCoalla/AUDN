const knex = require("../config/knexfile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.regUser = async (req, res) => {
  const { name, password, email } = req.body;
  const salt = await bcrypt.genSalt(10);
  const passwordEncrypt = await bcrypt.hash(password, salt);
  try {
    const resultado = await knex("user").insert({
      name: name,
      password: passwordEncrypt,
      email: email,
    });
    res.status(200).json({ message: "Se ha registrado el usuario" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { name, password } = req.body;
  knex("user")
    .where({ name: name })
    .then(async (resultado) => {
      if (!resultado.length) {
        res.status(404).json({ error: "El user no se encuentra registrado" });
        return;
      }
      const validatePassword = await bcrypt.compare(
        password,
        resultado[0].password
      );
      if (!validatePassword) {
        res.status(400).json({
          error: "Usuario y/o contraseña inválido",
        });
        return;
      }

      const token = jwt.sign(
        {
          name: resultado[0].name,
        },
        process.env.TOKEN_SECRET
      );
      res.status(200).json({
        message: "El usuario se ha logeado correctamente",
        token: token,
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.getSongs = async (req, res) => {
  try {
    const resultado = await knex.select("*").from("songs");
    res.status(200).json({ songs: resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.filterGenere = async (req, res) => {
  const { genere } = req.body;
  try {
    const resultado = await knex("songs").where({ genere });
    res
      .status(200)
      .json({ message: "Los generos seleccionados son : ", resultado });
  } catch (error) {
    res
      .status(400)
      .json({ message: "No se encontró un género con ese filtro" });
  }
};

exports.newPlaylist = async (req, res) => {
  const { name, songs_id, user_id } = req.body;
  try {
    const playList = await knex("playList")
      .insert({
        name: name,
        user_id: user_id,
      })
      .returning("id");
    const playListSongs = await knex("playlist_songs").insert({
      playList_id: playList[0].id,
      songs_id: songs_id,
    });
    res
      .status(200)
      .json({ message: "Se creo la playlist correctamente", playListSongs });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPlaylist = async (req, res) => {
  try {
    const resultado = await knex.select("*").from("playList");
    res.status(200).json({ getPlaylist: resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
