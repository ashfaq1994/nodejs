const express  = require('express');
const app  = express();
const userRoute = require('./routes/userRoutes');
const Sequelize = require('sequelize');

const models = require('./models');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views','public');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('movie', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const Model = Sequelize.Model;

  
class Product extends Model { }

Product.init({
  title: Sequelize.STRING,
  content: Sequelize.STRING,
}, { sequelize, modelName: 'product' });

class User extends Model {}
User.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
}, { sequelize, modelName: 'user' });

class Address extends Model {}
Address.init({
  type: Sequelize.STRING,
  line1: Sequelize.STRING,
  line2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
}, { sequelize, modelName: 'address' });

Product.User = Product.belongsTo(User);
User.Product = User.hasMany(Product);
User.Addresses = User.hasMany(Address);


sequelize.sync();
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  class Tag extends Model {}
Tag.init({
  name: Sequelize.STRING
}, { sequelize, modelName: 'tag' });

Product.hasMany(Tag);
  class categorey extends Model {}
categorey.init({
  name: Sequelize.STRING
}, { sequelize, modelName: 'categorey' });

Product.hasMany(categorey);

app.post('/test', async (req, res) => {
    
    // return Product.create({
    //     title: 'New',
    //     tags: [
    //       { name: 'Alpha'},
    //       { name: 'Beta'},
    //       { name: 'New dev'},
    //       { name: 'Beta dasdsadsad'}
    //     ]
    //   }, {
    //     include: [ Tag ]
    //   })
    
   const productstore =  await Product.create({
       title: 'Chair',
       content : 'hello world the developers',
        tags: [
          { name: 'Alpha'},
          { name: 'Beta'}
        ],
        categoreys: [
          { name: 'Alpha'},
          { name: 'Beta'}
        ]
      }, {
        include: [ Tag,categorey ]
      })
    res.status(201)
        .json({ data : productstore });
});

app.get('/test', (req, res) => {
    Product.findAll({ order: [ [ 'createdAt', 'DESC' ]], include: [ Tag,categorey ] },).then(tasks => {
        console.log(JSON.stringify(tasks))
        res.json({ data: tasks })
      
        /*
          [{
            "name": "A Task",
            "id": 1,
            "createdAt": "2013-03-20T20:31:40.000Z",
            "updatedAt": "2013-03-20T20:31:40.000Z",
            "userId": 1,
            "user": {
              "name": "John Doe",
              "id": 1,
              "createdAt": "2013-03-20T20:31:45.000Z",
              "updatedAt": "2013-03-20T20:31:45.000Z"
            }
          }]
        */
      }) 
});

app.listen(port, () => console.log('server started nodejs'));

app.use('/',userRoute);


