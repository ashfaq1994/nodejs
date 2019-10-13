const Company = require('../models').Company;
exports.createUser = async (req,res) => {
  const data = await Company.create({
     name : req.body.name,
    });
   
     res.status(200)
         .json({
             data : data,
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