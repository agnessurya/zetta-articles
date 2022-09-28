const {dataBase} = require('../config/mongodb')
const {ObjectId} = require('mongodb')


class Comment {
    static Comments(){
        const db = dataBase()
        return db.collection('Comments')
    }
    static create(payload) {
        return this.Comments().insertOne(payload);
    }

    static findOne(id){
        return this.Comments().findOne({_id : ObjectId(id)})
    }

    static findAll(){
        return this.Comments().find().toArray();
    }

    static deleteOne(id){
        return this.Comments().findOneAndDelete({_id : ObjectId(id)})
    }

    static update(id,payload){
        return this.Comments().findOneAndReplace({_id : ObjectId(id)},payload)
    }

}

module.exports = Comment