const models = require('../models');
const slugify = require('slugify')



exports.index = (req,res,next) => {
    res.render('create', {
      pageTitle : 'Home Page'
    });   
};


exports.store = async  (req,res,next) => {
    try {   
    const newTrip = await models.Trip.create({
        title : 'New Trip',
        from_date : Date.now(),
        to_date : Date.now(),
        description : 'New Trip for iteneary',
        departure : 'Bangalore',
        departure_time : Date.now(),
        location : 'Bangalore',
        image : {one :'New img',two:'second img'},
        video : 'New Yputube link',
        featured : true,
        price : 299.00,
        slug : slugify('New Trip for iteneary').toLowerCase(),
        destination_id : 1,
        excludes: [{
          name : 'New first NAme',
          check : true,
        }],
        includes: [{
          name : 'New first NAme',
          check : true,
       }
       ]
    },{
      include: [{
        model: models.Excludes,
        as: 'excludes'
      },
        {
        model: models.Includes,
        as: 'includes'
      }]
    });
    
     res.status(201)
        .json({ data:  newTrip  });
      }
      catch (error)
      {
          console.log(error);
          
      const valdiations = Object.values(error.errors).map(el => {
        return {name : el.path,message :el.message};
      }); 

      res.status(404)
      .json({
        error: valdiations
      });
 };
}


exports.newDestination = async (req,res,next) => {
  try{
    const newDestinations = await models.Destination.create({
      name: 'New Bangalore',
      slug: slugify('Bangalore').toLowerCase(),
    });
    res.status(201)
        .json({ data:  newDestinations  });
  }
  catch(error)
  {
    res.json({
      error: error
    });
  }
}


exports.destinationIndex = async (req,res,next) =>
{
      const allDestination = await models.Destination.findAll();
      res.status(201)
          .json({ data : allDestination  });
}

exports.destinationOne = async (req,res,next) =>
{
  // console.log(req.params.slug);
  
  try
  {
    const allDestination = await models.Destination.findOne(
      {
        where: {
          slug: req.params.slug,
        },
      include: [{
        model: models.Trip,
        as : 'trip'
      }
      ]
    })
  
    res.status(200)
    .json({ data : allDestination });
  }
  catch (error)
  {
    res.status(400)
    .json({ data : error });
  }
}
// npx sequelize-cli model:generate --name Includes --attributes  check:boolean,name:string,trip_id:integer
// npx sequelize-cli model:generate --name Includes --attributes  check:boolean,name:string,trip_id:integer
// npx sequelize-cli model:generate --name Review --attributes  comment:text,trip_id:integer,user_id:integer
// npx sequelize-cli model:generate --name Trip_Type --attributes  name:string
// npx sequelize-cli model:generate --name Destination --attributes  name:string