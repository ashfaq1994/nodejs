
exports.createUser = (req,res) => {
    res.status(200)
    .json({
        data : req.body,
    });
    console.log(req.body);  
    
    // res.redirect('/');
};

exports.getUser = (req,res) => {
    // res.status(200)
    // .json({
    //     data : req.body,
    // });

    // res.render('index', { pageTitle : 'New Page Title developer'});
    // console.log(req.body);   
};