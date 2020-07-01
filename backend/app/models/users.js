/**
 * Created by Anurag on 19/06/2020.
 */
"use strict";
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const userSchema = new Schema({
    "username": {type: String, default: ""},
    "photo": {type: String, default: ""},
    "isDeleted": {type: Boolean, default: false},
    "isInactive": {type: Boolean, default: false},
    "addedOn": {type: Number, default: (new Date).getTime(), set: deleteEmpty},
    "modifiedOn": {type: Number, default: (new Date).getTime(), set: deleteEmpty}
}, {timestamps: false});


function deleteEmpty(v) {
    if (v == null || v === '') {
        return 0;
    }
    return v;
}

/**
 * Non static methods
 */
userSchema.method({
    saveObj: function () {
        return this.save();
    }
});

/**
 * Static methods for model
 */
userSchema.static({
    getDocuments: function (requestData, selectionKeys='', offset='', limit='', populationKeys='') {
        return this.find(requestData, selectionKeys).skip(parseInt(offset)).limit(parseInt(limit)).exec();
    },
    getDocument: function (findQuery) {
        return this.findOne(findQuery);
    },
    updateCompany: function (findQuery, updateQuery) {
        return this.findOneAndUpdate(findQuery, updateQuery, {new: true});
    },
});
/**
 * Register
 */
export default Mongoose.model('users', userSchema);