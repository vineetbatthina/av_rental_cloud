const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const router = express.Router();

const { AV } = require("../models/av");

const sqlConnection = require("../pool");

router.get("/numberOfAVs", auth, admin, async (req, res) => {
  const count = await AV.getCount();
  res.send({ count: count });
});

router.get("/statesOfAVs", auth, admin, async (req, res) => {
  const avStates = await AV.getStatesAndNumbers();
  res.send(avStates);
});

// added
router.get("/avStatus", auth, async (req, res) => {
  const avStates = await AV.getListOfConnectedAV();
  console.log("avst", avStates);
  res.send(avStates);
});


router.get("/listOfAVs", auth, admin, async (req, res) => {
  const avData = await AV.getListOfConnectedAVs();
  res.send(avData);
});

router.post("/editVehicleStatus", auth, async(req,res) =>{
  
  const vehicle = req.body;
  const update_vehicle_status = `UPDATE vehicledetails set vcurrentstatus = ? where vid= ?`
  await sqlConnection.query(update_vehicle_status, [vehicle.vehicleStatus,vehicle.vehicleId], async function (error, results) {
    if (error) {
      console.log(error);
      console.log('Vehicle Status Could not be updated');
      res.send("Update of Vehicle could not be done");
    }
    else {
      console.log(results);
      console.log('Vehicle Status updated');
      res.send("Successful");
    }
  });

});

module.exports = router;
