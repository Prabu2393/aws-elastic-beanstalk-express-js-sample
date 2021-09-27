const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
