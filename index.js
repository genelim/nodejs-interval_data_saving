var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    db = mongoose.createConnection('mongodb://127.0.0.1/interval'),
    User = require('./app/model/user')(db);
    
setInterval(function(){
    var newUser = User({
        username: 'starlord55',
        password: 'password'
    });
    newUser.save(function(err) {
        if (err) throw err;
        console.log('User created!');
    });
}, 1000);
