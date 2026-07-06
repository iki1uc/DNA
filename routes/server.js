const express = require('express');
const app = express();

app.use('/px', require('./routes/px.routes'));
app.use('/ghost', require('./routes/ghost.routes'));
app.use('/axi', require('./routes/axi.routes'));

app.listen(3000);

