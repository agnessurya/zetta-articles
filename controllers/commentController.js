const Comment = require("../models/Comment");
const Article = require("../models/Article");

class CommentController {
  static async findComment(req, res) {
    try {
      const Comments = await Comment.findAll();
      res.status(200).json(Comments);
    } catch (err) {
      next(err);
    }
  }

  static async createComment(req, res, next) {
    try {
      const id = req.params.id;
      const find = await Article.findOne(id);
      if (!find) {
        throw { name: "DataNotFound" };
      }
      const { text } = req.body;

      const payload = {
        ArticleID: id,
        text,
      };
      const Comments = await Comment.create(payload);
      if (Comments) {
        res.status(201).json({ message: "Comment created successfully" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateComment(req, res, next) {
    try {
      const id = req.params.id;
      const find = await Comment.findOne(id);
      if (!find) {
        throw { name: "DataNotFound" };
      }
      const { text } = req.body;

      const payload = {
        text
      };

      const Comments = await Comment.update(id, payload);
      if (Comments) {
        res.status(200).json({ message: "Comment updated successfully" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteComment(req, res, next) {
    try {
      const id = req.params.id;
      const find = await Comment.findOne(id);
      if (!find) {
        throw { name: "DataNotFound" };
      }
      const Comments = await Comment.deleteOne(id);
      if (Comments) {
        res.status(200).json({ message: "Comment deleted successfully" });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = CommentController;
