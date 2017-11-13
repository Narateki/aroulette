var express = require('express');
var router = express.Router();

/* GET game page. */
router.get('/game', function(req, res) {
    res.render('game', { title: 'ARoulette' });
});


module.exports = router;
