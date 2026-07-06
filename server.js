const express = require('express');
const app = express();

app.use('/px', require('./routes/px.routes'));
app.use('/axi', require('./routes/axi.routes'));
app.use('/ghost', require('./routes/ghost.routes'));
app.use('/pipe', require('./routes/pipe.routes'));
app.use('/tp', require('./routes/tp.routes'));

app.listen(3000, () => {
    console.log("DNA KOOP Router aktiv");
});

