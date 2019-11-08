const express  = require('express');
const app  = express();
const  userRoute = require('./routes/userRoutes');
const models = require('./models');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views','public');

// models.sequelize.sync().then(function(){
//   console.log('Nice Database connected');
  app.listen(port, () => console.log('server started nodejs'));
// }).catch((error) => {
//      console.log(error +'Error');
// })

// when a random route is inputed
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to this API.'
// }));

app.use('/',userRoute);


