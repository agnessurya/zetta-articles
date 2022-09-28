const {dataBase} = require('../config/mongodb')
const {ObjectId} = require('mongodb')


class Article {
    static articles(){
        const db = dataBase()
        return db.collection('Articles')
    }
    static create(payload) {
        return this.articles().insertOne(payload);
    }

    static findOne(id){
        return this.articles().findOne({_id : ObjectId(id)})
    }

    static findAll(){
        return this.articles().find().toArray();
    }

    static deleteOne(id){
        return this.articles().findOneAndDelete({_id : ObjectId(id)})
    }

    static update(id,payload){
        return this.articles().findOneAndReplace({_id : ObjectId(id)},payload)
    }

}

module.exports = Article