const path = require('path');
const express = require('express');
const app = express();

// Definir un puerto

app.set('port', process.env.PORT || 3030)

// Definir un observador del puerto definido

app.listen(app.get('port'), () => console.log('Listening on Port http://localhost: ' + app.get('port')));

// Definir una ruta  para los recursos publicos

app.use(express.static(path.resolve(__dirname, "../public")));

// Definir las rutas de mi servidor

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views', 'home.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, './views', 'register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, './views', 'login.html')));