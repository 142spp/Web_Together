const express = require("express");
const fs = require("fs");
const app = express();
const portNumber = 8000;
app.use(express.static("front"));
app.get('/', (request, response) => {
    console.log(__dirname);
    fs.readFile(`front/html/login.html`, (err, data) => {
        if(err) throw err;
        response.writeHead(200);
        response.end(data);
    });
});

app.listen(portNumber, () => {
    console.log(`Web_Together opened in http://localhost:${portNumber}`);
});