'use strict';

const express = require("express");
const app = express();
const PORT = (process.env.PORT || 5000);

const server = app.listen(PORT, function() {
    console.log('Node.js ready on port ' + PORT);
});

// ルーター設定
const route_api = require('./routes/api');
app.use('/api', route_api);
