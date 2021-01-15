const express = require('express');

const itemController = require('../controllers/items');

const router = express.Router();

router.get('/items', itemController.getItems);

router.post(
  '/item',
  itemController.createItem,
);

module.exports = router;
