const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const passport = require('passport');
const session = require('express-session');

const db = require('./db/connection');
require('./config/passport')(passport);
const routes = require('./routes');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express session 
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});