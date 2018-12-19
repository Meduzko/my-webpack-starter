'use strict';

const express = require('express');
var app     = express();
var path    = require("path");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static(__dirname));

// App
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);