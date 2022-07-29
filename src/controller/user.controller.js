// const express = require("express");
// const User = require('../models/user.models');
// const router = express.Router();

// router.post("", function (req, res) {
//     try {
//         var mod = new User(req.body);
//         if (req.body.mode == "Save") {
//             mod.save(function (err, data) {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send({ data: "Added successfully" })
//                 }
//             });
//         } else {
//             User.findByIdAndUpdate(req.body.id, { name: req.body.name, email: req.body.email, salary: req.body.salary },
//                 function (err, data) {
//                     if (err) {
//                         res.send(err);
//                     } else {
//                         res.send({ data: "updated" });
//                     }
//                 });
//         }

//     }
// });

// router.post("/:id", function (req, res) {
//     User.remove({ _id: req.body.id }, function (err) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send({ data: "deleted" });
//         }
//     })
// })
// module.exports = router;


const express = require("express");
const router = express.Router();
const Employees = require("../models/user.models");



router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Employees.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    const data = await Employees.find().lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});


router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await Employees.findById(req.params.id).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.patch("/:_id", async (req, res) => {
  try {
    const data = await Employees.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const data = await Employees.findByIdAndDelete(req.params.id).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;