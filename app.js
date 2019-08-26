const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const app = express();

//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use("/",require('./routes/index'));
app.use("/users",require('./routes/users'));



//starting Server
const PORT =process.env.PORT || 5000;
app.listen(PORT,console.log("Server Started at 5000"));