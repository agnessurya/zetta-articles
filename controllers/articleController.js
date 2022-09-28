const Article = require("../models/Article");

class ArticleController {
  static async findArticle(req, res) {
    try {
      const articles = await Article.findAll();
      res.status(200).json(articles);
    } catch (err) {
      next(err);
    }
  }
  static async createArticle(req, res, next) {
    try {
      const { title, description, imgUrl } = req.body;

      const payload = {
        title,
        description,
        imgUrl,
      };

      const articles = await Article.create(payload);
      if (articles) {
        res.status(201).json({ message: "Article created successfully" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateArticle(req, res, next) {
    try {
      const id = req.params.id;
      const find = await Article.findOne(id);
      if (!find) {
        throw { name: "DataNotFound" };
      }
      const { title, description, imgUrl } = req.body;

      const payload = {
        title,
        description,
        imgUrl,
      };

      const articles = await Article.update(id, payload);
      if (articles) {
        res.status(200).json({ message: "Article updated successfully" });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteArticle(req, res, next) {
    try {
      const id = req.params.id;
      const find = await Article.findOne(id);
      if (!find) {
        throw { name: "DataNotFound" };
      }
      const articles = await Article.deleteOne(id);
      if (articles) {
        res.status(200).json({ message: "Article deleted successfully" });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = ArticleController;
