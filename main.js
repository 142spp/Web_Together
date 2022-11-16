const express = require("express");
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const portNumber = 8000;
app.use(express.static("front"));
app.get('/', (request, response) => {
    response.render('front/login');
});
app.get('/login', (req, res) => {
    res.send("hello login");    
});
app.listen(portNumber, () => {
    console.log(`Web_Together opened in http://localhost:${portNumber}`);
});

module.exports = app;