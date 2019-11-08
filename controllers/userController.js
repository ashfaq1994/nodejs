const models = require('../models');
const {Company, User, Product } = require('../models');

exports.createUser = async (req, res) => {
  
  try {
    const newCompany = await models.Company.create({
      name: 'asdfsakjfskj',
      user: [{
         firstName : 'New first NAme',
         email : 'New first NAme',
         lastName : 'New first NAme',
       }],
      product: [{
         title : 'tricksfree',
         decription : 'New first NAme',
         model : 'New first NAme',
      }
      ]
    }, {
      include: [{
        model: models.User,
        as: 'user'
      },
        {
        model: models.Product,
        as: 'product'
      }]
    });
    res.status(201)
    .json({ data:  newCompany  });
  }
  catch (error)
  {
  const valdiations = Object.values(error.errors).map(el => {
    return {name : el.path,message :el.message};
  });

    res.status(404)
      .json({
        error: valdiations
      });
  }

};


exports.getUser =  async (req, res) => {
  const data = await models.Product.findAll({
    include: [{
      model: models.Company,
    }
    ]
  });
  res.status(200)
    .json({
      data: data,
      links: {
        first: req.protocol + '://' + req.get('host') + req.originalUrl + '?page=1',
        last: req.protocol + '://' + req.get('host') + req.originalUrl + '?page=1',
      },
      meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        path: req.protocol + '://' + req.get('host') + req.originalUrl,
        per_page: 10,
        to: data.length,
        total: data.length,
      }
    });

    // res.render('index', { pageTitle : 'New Page Title developer'});
    // console.log(req.body);   
};