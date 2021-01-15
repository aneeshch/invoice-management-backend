const mappers = require('../utils/mappers');
const constants = require('../utils/constant');
const Item = require('../models/items');

exports.getItems = (req, res, next) => {
  try {
    Item.find()
      .then((items) => {
        res.status(200).json({
          message: constants.FETCH_ITEMS_SUCCESS_MESSAGE,
          items: mappers.itemsList(items),
        });
      })
      .catch((err) => {
        next(err);
      });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.createItem = async (req, res, next) => {
  try {
    const {
      name, price, description,
    } = req.body;
    const item = new Item({
      name: name,
      price,
      description,
    });
    item
      .save()
      .then(() => {
        res.status(201).json({
          message: constants.CREATE_ITEM_SUCCESS_MESSAGE,
        });
      })
      .catch((err) => {
        next(err);
      });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
