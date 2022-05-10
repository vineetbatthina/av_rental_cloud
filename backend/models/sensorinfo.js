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


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const sensorSchema = new Schema(
//   {
//     world_details: {
//       vehicles: {
//         type: String,
//       },
//       time: {
//         type: Number,
//       },
//     },
//     weather: {
//       precipitation: {
//         type: Number,
//       },
//       fog: {
//         type: Number,
//       },
//     },
//     vehicle_details: {
//       vehicle_id: {
//         type: String,
//       },
//       vehicle_license: {
//         type: String,
//       },
//       condition: {
//         type: String,
//       },
//       speed: {
//         type: String,
//       },
//       GNSS: {
//         type: String,
//       },
//       location: {
//         type: String,
//       },
//       heading: {
//         type: String,
//       },
//       throttle: {
//         type: Number,
//       },
//       steer: {
//         type: Number,
//       },
//       reverse: {
//         type: Boolean,
//       },
//       gear: {
//         type: String,
//       },
//       distance: {
//         type: Number,
//       },
//     },
//   },
//   {
//     versionKey: false,
//   }
// );
// const frameModel = mongoose.model("Sensor", sensorSchema);
// module.exports = frameModel;
