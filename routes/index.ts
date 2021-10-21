import {Router} from 'express';
import {connect} from 'mongoose';

var User = require('../models/users');

var router = Router();


router.get('/', function (req, res, next) {

    run().catch(err => console.log(err));

    async function run(): Promise<void> {
        // 4. Connect to MongoDB
        await connect('mongodb+srv://user1:VFJDqIVLvsGq1yUh@cluster0.thraf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        var new_user = new User({
            name:'test',
            email:'qq@gmail,com',
            // name: req.body.name,
            // email: req.body.email,
            // password: req.body.password,
            // phone: req.body.phone,
            _enabled: false
        });
        new_user.save(function (err) {
            if (err) console.log(err);
        });
    }

    res.render('index', {title: 'Express', dick: 'doooooog'});
});
export = router;

