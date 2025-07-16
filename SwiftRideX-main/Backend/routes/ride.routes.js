const express = require("express");
const router = express.Router();
const { body, query} = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");


router.post('/create',
    authMiddleware.authUser,
    // body('userId').isString().isLength({ min: 24, max: 24 }).withMessage('userId must be 24 characters long'),
    body('pickup').isString().isLength({ min: 3 }).withMessage('pickup must be at least 3 characters long'),
    body('destination').isString().isLength({ min: 3 }).withMessage('destination must be at least 3 characters long'),
    body('vehicleType').isString().isIn([ 'auto', 'car', 'moto' ]).withMessage('vehicleType must be one of auto, car, or motorcycle'),
    rideController.createRide
  );

  router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('pickup must be at least 3 characters long'),
    query('destination').isString().isLength({ min: 3 }).withMessage('destination must be at least 3 characters long'),
    rideController.getFare
  );




    module.exports = router;