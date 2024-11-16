const express = require('express');
const app = express();
const PORT = 8080;
const dbconnect = require('./config/db');
const bodyParser = require('body-parser');
const UserRoutes = require('./Routes/UserRoutes');

dbconnect();

app.use(bodyParser.json());
app.use('/api',UserRoutes);


app.listen(PORT,() =>{
    console.log(`Server is runing on Port No ${PORT}`);
})