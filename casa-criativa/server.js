// usei o express para criar e configurar meu servidor
const express = require("express");
const server = express();

// configurar arquivos estaticos(css, scripts, imagens)
server.use(express.static("public"));

// criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {
    return res.sendFile(__dirname +"/index.html");
});

// liguei o servidor na porta 3000
server.listen(3000);