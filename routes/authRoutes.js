
const passport = require('passport');
const keys = require('../config/keys');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.get('/auth/google/callback',
        passport.authenticate('google', {session: false, failureRedirect: '/'}),
        (req, res) => {
            res.send('test')
           // res.redirect('https://gentle-shelf-52680.herokuapp.com/categories');
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })
}