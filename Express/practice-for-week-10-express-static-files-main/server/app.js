const express = require('express');
const path = require('path');
const app = express();

// Your code here

// 1
// app.use(express.static('assets'))

// 2
// app.use(express.static('assets/scripts'));

// 3
app.use(express.static(path.join(__dirname , 'assets/css')));




const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
