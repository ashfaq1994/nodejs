const express  = require('express');
const app  = express();
const  userRoute = require('./routes/userRoutes');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views','public');

app.use('/',userRoute);


app.listen(port, () => console.log('server started nodejs'));