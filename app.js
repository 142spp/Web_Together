const express = require("express");
const app = express();

app.set("views","./views");
app.set("view engine", "ejs");

const portNumber = 3000;
app.use(express.static("front"));
app.get('/', (request, response) => {
    response.render('login');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.listen(portNumber, () => {
    console.log(`Web_Together opened in http://localhost:${portNumber}`);
});

module.exports = app;