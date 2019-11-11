const models = require('../models');
const {Company, User, Product } = require('../models');

exports.index = (req,res,next) => {
    res.render('index', {
      pageTitle: 'Home Page',
      trip: 'new trip'
    });   
};

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
         title : 'tricksfree@gmail.com',
         decription : 'New first NAme',
         model : 2345,
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


exports.getUser = async (req, res) => {
  const data = await models.Company.findAll({
    include: [{
      model: models.Product,
      as : 'product'
    },
    {
      model: models.User,
      as : 'user'
    }
    ]
  });

  res.status(200)
  .json({
    data: data
  }); 


  // const transaction = await models.sequelize.transaction();
  //     try {
  //       let employee = await Company.create({name : 'name'}, {
  //         transaction
  //       });
  //       let user_role_obj = [
  //         {
  //           companyId : employee.id,
  //           email : 'hackc@gmail.com',
  //           firstName : 'New dudsj',
  //           lastName : 'new devloeprs',
  //         },
  //         {
  //           companyId : employee.id,
  //           email : 'hackc@gmail.com',
  //           firstName : 'New dudsj',
  //           lastName : 'new devloeprs',
  //         },
  //       ];
  //       let user_role = await User.bulkCreate(user_role_obj, {
  //         transaction
  //       });
  //       let department = await Department.create({
  //         name: 'New department', 
  //         companyId : employee.id,
  //        }, {
  //         transaction
  //       });
  //       await transaction.commit();
  //       if (employee) {
  //         res.json({
  //           success: 1,
  //           data: {employee,user_role,department}
  //           // message: messagesList.addEmployee.success
  //         });
  //       }
  //     } catch (ex) {
  //       await transaction.rollback();
  //       res.json({error : { success: 0, message: ex.message }});
  //     }
  // res.status(200)
  //   .json({
  //     data: data,
  //     links: {
  //       first: req.protocol + '://' + req.get('host') + req.originalUrl + '?page=1',
  //       last: req.protocol + '://' + req.get('host') + req.originalUrl + '?page=1',
  //     },
  //     meta: {
  //       current_page: 1,
  //       from: 1,
  //       last_page: 1,
  //       path: req.protocol + '://' + req.get('host') + req.originalUrl,
  //       per_page: 10,
  //       to: data.length,
  //       total: data.length,
  //     }
  //   });

    // res.render('index', { pageTitle : 'New Page Title developer'});
    // console.log(req.body);   
};