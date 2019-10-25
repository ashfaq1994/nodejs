const User = require('../models').User;
const WorkingDay = require('../models').WorkingDay;
const Company = require('../models').Company;
exports.createUser = (req, res) => {
  // Company.create({
  //   name: 'hello world',
  //   User: {
  //     firstName : 'Name wfdsf',
  //   }
  // }, {
  //   include: User
  // }).then(response => {
  //   res.json({ data: response })
  // }).catch(error => {
  //   res.json({ data: error })
  // });

  // return Company.create({
  //   name: 'Chair',
  //   User: [{
  //     firstName: 'Matt',
  //     lastName: 'Hansen'
  //   }]
  // }, {
  //   include: [{
  //     association: User,
  //   }]
  // }).then(response => {
  //     res.json({ data: response })
  //   }).catch(error => {
  //     res.json({ data: error })
  //   });
  


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