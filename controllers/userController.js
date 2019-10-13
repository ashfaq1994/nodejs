const User = require('../models').User;
const WorkingDay = require('../models').WorkingDay;
exports.createUser = async (req,res) => {
//   const data = await Company.create({
//      name : req.body.name,
//     });
   
//      res.status(200)
//          .json({
//              data : data,
//          })

let currentDate = new Date();

WorkingDay.bulkCreate([
  {
    weekDay: 'Monday',
    workingDate: currentDate,
    isWorking: true
  },
  {
    weekDay: 'Tuesday',
    workingDate: currentDate,
    isWorking: true
  },
  {
    weekDay: 'Wednesday',
    workingDate: currentDate,
    isWorking: false
  }
])
.then((workingDays) => {
  User.findAll({where: {id: [1, 2, 3]},
  include: ['days']})
  .then((users) => {
    // For user 1, 2 and 3 set the sames workingDays
    users.forEach(user => {
      user.setDays(workingDays) // workingDays is an array (one user hasMany workingDays)
      .then((joinedUsersWorkingDays) => {
        console.log(joinedUsersWorkingDays)
      })
      .catch((err) => console.log("Error while joining Users and WorkingDays : ", err))
    });
  })
  .catch((err) => console.log("Error while Users search : ", err))
})
.catch((err) => console.log("Error while WorkingDay creation : ", err))

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