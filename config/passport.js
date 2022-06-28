const LocalStrategy = require('passport-local').Strategy;
const db = require('../db/connection');


module.exports = function(passport) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            db.query('SELECT * FROM users WHERE username = ?', [username], function(err, results) {
                if (err) {
                    return done(err);
                }
                if (!results.length) {
                    return done(null, false);
                }
                if (results[0].password !== password) {
                    return done(null, false);
                }
                return done(null, results[0]);
            });
        }))
    
    
        passport.serializeUser(function(user, done) {
            done(null, user);
          });
          
          passport.deserializeUser(function(user, done) {
            done(null, user);
          });


    }