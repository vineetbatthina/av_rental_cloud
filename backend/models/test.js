
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const testschema = new Schema({
    testdata: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    project: {
        type: String,
        required: false,
    },
},
    
    {
        versionKey : false
    
    
},
);
const testModel = mongoose.model('test',testschema);
module.exports = testModel;
