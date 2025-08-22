const express = require('express');
const router = express.Router();
const dealController = require('../controllers/dealController');

router.get('/', dealController.getDeals);
router.get('/:id', dealController.getDealById);

module.exports = router;
