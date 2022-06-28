const db = require('../db/connection');
const passport = require('passport');

const passportController = {

    login(req,res, next){
        passport.authenticate('local', {
            successRedirect: '/homepage',
            failureRedirect: '/login',
          })(req, res, next);
    },

    loginView(req,res){
        res.render('login', {title: 'Login'});
    },


    register(req,res) {
        const {username, password} = req.body;
        db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, results) => {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong',
                    err
                });
            }
            res.redirect('/login');
        }
        );
    },

    registerView(req,res) {
        res.render('register', {title: 'Register'});
    }

}

module.exports = passportController;