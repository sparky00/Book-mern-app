const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {PORT, MONG_URL} = require('./config');
const indexRouter = require('./Routes/index');

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res)=>{
    res.send("Server is ready");
})

app.use('/', indexRouter)

mongoose.connect(MONG_URL);
app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
})