const path = require('path')
const express  = require('express');
const app  = express();
const userRoute = require('./routes/userRoutes');
const tripRoute = require('./routes/tripRoute');
const models = require('./models');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, './views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// models.sequelize.sync().then(function(){
//   console.log('Nice Database connected');
  app.listen(port, () => console.log('server started nodejs'));
// }).catch((error) => {
//      console.log(error +'Error');
// })

app.use('/',userRoute);
app.use('/trip',tripRoute);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));



