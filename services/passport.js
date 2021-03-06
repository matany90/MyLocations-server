const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users'); //pull out 'users' collection

//generate user to cookie
passport.serializeUser((user, done) => {
    done(null, user.id); //user.id in NOT profile.id, its the identifier mongo gives every record
});

//generate cookie to user
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    })
});

//define authGoogle via passport API
 passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
},
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
            //user already exists
            return done(null, existingUser);
        }
            const user = await new User({ googleId: profile.id }).save();
            done(null, user)
    }
));

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
},
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        const existingUser = await User.findOne({ facebookId: profile.id });
        if (existingUser) {
            //user already exists
            return done(null, existingUser);
        }
            const user = await new User({ facebookId: profile.id }).save();
            done(null, user)
    }
));

passport.use(new GitHubStrategy({
    clientID: keys.githubClientID,
    clientSecret: keys.githubClientSecret,
    callbackURL: '/auth/github/callback',
    proxy: true
},
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        const existingUser = await User.findOne({ githubId: profile.id });
        if (existingUser) {
            //user already exists
            return done(null, existingUser);
        }
            const user = await new User({ githubId: profile.id }).save();
            done(null, user)
    }
));
