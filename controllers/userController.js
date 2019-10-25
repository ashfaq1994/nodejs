const User = require('../models').User;
const WorkingDay = require('../models').WorkingDay;
exports.createUser = (req, res) => {
  const reqUser = { ...req.body }
  
  User.create(
    // firstName: req.body.firstName,
    // lastName: req.body.lastName,
    // email: req.body.email,
    // companyId: req.body.companyId
    reqUser
  ).then(response => {
    res.json({ data: response })
  }).catch(error => {
    res.json({ data: error })
  });

};

exports.getUser =  (req,res) => {

    User.findOne({
        where: {email: 'log_w@domain.com'},
        attributes: [['id', 'user_id'],'firstName','lastName']
      }).then(project => {
        res.status(200)
    .json({
        data : project
    });
      })
    // res.status(200)
    // .json({
    //     data : req.body,
    // });
};