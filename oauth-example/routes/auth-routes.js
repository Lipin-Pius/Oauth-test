const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res)=>{
    res.render('login')
});

router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

router.get('/logout', (req, res)=>{
    res.send('logged out');
});

router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.send('Reached callback uri');
});

module.exports = router;