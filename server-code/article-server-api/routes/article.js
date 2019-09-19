var express = require('express');
var router = express.Router();

/* GET articles listing listing. */
router.get('/all', function(req, res, next) {
  res.send('List all the articles - Some 1');
});

/* POST Article save */
router.post('/add', function(req, res, next) {
    var author_name         = req.body.author_name;
    var article_title       = req.body.article_title;
    var article_description = req.body.article_description;

    res.send('Add an Article');
});

/* POST Article Update */
router.post('/update/:article_id', function(req, res, next) {
    var article_id          = req.params.article_id;
    var author_name         = req.body.author_name;
    var article_title       = req.body.article_title;
    var article_description = req.body.article_description;

    res.send('Update an Article');
});

/* POST Article Delete */
router.post('/delete/:article_id', function(req, res, next) {
    var article_id          = req.params.article_id;

    res.send('Delete an Article');
});


/* GET single Article. */
router.get('/:articleId', function(req, res, next) {
    res.send('Get single Article');
});

module.exports = router;