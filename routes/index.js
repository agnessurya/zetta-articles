const route = require("express").Router();
const ArticleController = require("../controllers/articleController");
const CommentController = require("../controllers/commentController");
const errorHandler = require("../middlewares/errorHandler");

route.get("/articles",ArticleController.findArticle)
route.post("/articles", ArticleController.createArticle);
route.put("/articles/:id", ArticleController.updateArticle);
route.delete("/articles/:id", ArticleController.deleteArticle);

route.get("/comments",CommentController.findComment)
route.post("/comments/:id", CommentController.createComment);
route.put("/comments/:id", CommentController.updateComment);
route.delete("/comments/:id", CommentController.deleteComment);

route.use(errorHandler);
module.exports = route;
