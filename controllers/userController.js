const User = require('../models').User;
exports.createUser = (req,res) => {
//   const data = await Company.create({
//      name : req.body.name,
//     });
   
//      res.status(200)
//          .json({
//              data : data,
//          })


User.findOne({
  where: {email: 'james@gmail.com'}, include: 'company'
})
.then((findedUser) => {
  // Get the User with Company datas included
  console.log(findedUser)
  // Get the company record only
  // console.log(findedUser.company)
})
.catch((err) => {
  console.log("Error while find user : ", err)
})

};

exports.getUser = (req,res) => {
    // res.status(200)
    // .json({
    //     data : req.body,
    // });

    // res.render('index', { pageTitle : 'New Page Title developer'});
    // console.log(req.body);   
};