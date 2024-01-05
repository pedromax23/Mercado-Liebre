const express = require("express"); // Express
const app = express();  // Ejecucion de express
const path = require("path"); // Path

// Configuracion EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Archivos estaticos
app.use(express.static(path.resolve(__dirname, "../public")))

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

const mainRouter = require('./routers/main-router')
app.use('/', mainRouter)

app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "./views/register.html")))
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "./views/login.html")))