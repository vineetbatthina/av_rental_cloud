const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const frameschema = new Schema({
    vehicle: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    time: {
        type: String,
        required: false,
    },
}, { collection: 'frame' },
    {
        versionKey : false
    
    
});
const frameModel = mongoose.model('frame',frameschema);
module.exports = frameModel;
