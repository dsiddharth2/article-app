var express = require('express');
var router = express.Router();
const Article = require('../models/article.model');

/* GET articles listing listing. */
router.get('/all', function(req, res, next) {
   var query =  Article.find()
   query.then(function(articles) {
        return res.status(400).send({
            status: true,
            data : articles
        });
   }).catch(function(error) {
        res.status(500).send({
            status : false,
            message: err.message || "Some error occurred while creating the Articles."
        });
   });
});

/* POST Article save */
router.post('/add', function(req, res, next) {

    if(!req.body.author_name) {
        return res.status(400).send({
            status: false,
            message: "Article Author cannot be empty"
        });
    }

    if(!req.body.article_description) {
        return res.status(400).send({
            status: false,
            message: "Article Description cannot be empty"
        });
    }

    // Create a Article
    const article = new Article({
        articleName         : req.body.article_title || "Untitled Article", 
        articleContent      : req.body.article_description,
        articleCreatedBy    : req.body.author_name
    });

    // Save Note in the database
    article.save()
    .then(data => {
        res.send({
            message : "Article added successfully",
            status: true,
            data : data
        });
    }).catch(err => {
        res.status(500).send({
            status : false,
            message: err.message || "Some error occurred while creating the Article."
        });
    });
});

/* POST Article Update */
router.post('/update/:article_id', async function(req, res, next) {
    try {
        var article_id          = req.params.article_id;
        var author_name         = req.body.author_name;
        var article_title       = req.body.article_title;
        var article_description = req.body.article_description;

        // find the article first
        var ifExists = await Article.exists({ _id:  article_id});
        if(!ifExists) {
            throw "Article does not exist";
        }

        if(!req.body.author_name) {
            return res.status(400).send({
                status: false,
                message: "Article Author cannot be empty"
            });
        }
    
        if(!req.body.article_description) {
            return res.status(400).send({
                status: false,
                message: "Article Description cannot be empty"
            });
        }

        var updatedArticle = await Article.findByIdAndUpdate(article_id,
            {
                articleName         : req.body.article_title || "Untitled Article", 
                articleContent      : req.body.article_description,
                articleCreatedBy    : req.body.author_name
            },
            {
                new : true
            });
        

        if(!updatedArticle) {
            throw "Error while Updating article : " + article_id;
        }

        res.send({
            message : "Article Updated successfully",
            status: true,
            data : updatedArticle
        });
    } catch(exception) {
        res.send({
            message : exception,
            status: false
        });
    }
});

/* POST Article Delete */
router.post('/delete/:articleId', async function(req, res, next) {
    try {
        var article_id          = req.params.articleId;

        // find the article first
        var ifExists = await Article.exists({ _id:  article_id});
        if(!ifExists) {
            throw "Article does not exist";
        }

        var status = await Article.findByIdAndRemove(article_id);
        if(!status) {
            throw "Error while deleting article : " + article_id;
        }

        res.send({
            message : "Article Deleted",
            status: true
        });
    } catch(exception) {
        res.send({
            message : exception,
            status: false
        });
    }
});


/* GET single Article. */
router.get('/:articleId', async function(req, res, next) {
    try {
        var article_id          = req.params.articleId;

        // find the article first
        var ifExists = await Article.exists({ _id:  article_id});
        if(!ifExists) {
            throw "Article does not exist";            
        }

        var article = await Article.findById(article_id);

        res.send({
            message : "Article Found",
            status: true,
            data : article
        });
    } catch(exception) {
        res.send({
            message : exception,
            status: false
        });
    }
});

module.exports = router;