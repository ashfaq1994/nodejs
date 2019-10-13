const Company = require('../models').Company;
exports.createUser = async (req,res) => {
//   const data = await Company.create({
//      name : req.body.name,
//     });
   
//      res.status(200)
//          .json({
//              data : data,
//          })

};

exports.getUser =  (req,res) => {
    // res.status(200)
    // .json({
    //     data : req.body,
    // });

    // res.render('index', { pageTitle : 'New Page Title developer'});
    // console.log(req.body);   
    // 1:1
// Get the company linked to a given User
// return User.findOne({
//     where: {email: 'john-connor@domain.com'}, include: 'company'
//   })
//   .then((findedUser) => {
//     res.status(200).json({
//        data : findedUser,
//     });
//   })
//   .catch((err) => {
//     console.log("Error while find user : ", err)
//   })

  // Get the employees for a given company
 return Company.findByPk(1, {include: ['employes']})
.then((company) => {
    res.status(200).json({
               data : company,
            });
})
.catch((err) => {
  console.log("Error while find company : ", err)
})
};