const express = require('express');
const router = express.Router();
const passport = require('passport');


    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    router.get('/', function(req, res) {
        if(req.isAuthenticated())
            res.render('profile.ejs', { user: req.user });
        else
        res.render('index.ejs', { message: req.flash('loginMessage') }); // load the index.ejs file
    });

    router.get('/index', function(req, res) {
        if(req.isAuthenticated())
            res.render('profile.ejs', { user: req.user });
        else
        res.render('index.ejs', { message: req.flash('loginMessage') }); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    router.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('index.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    // router.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    router.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // router.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    router.get('/profile', isLoggedIn, function(req, res) {
        //console.log("Authenticated");
        res.render('profile', {
            user : req.user, // get the user out of session and pass to template
            message: req.flash('signupMessage')
        });
    });

    router.get('/forgotpassword', function(req, res) {
        res.render('forgotpassword');
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/index', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    console.log("Not authenticated");
    res.redirect('/');
}

module.exports = router;
