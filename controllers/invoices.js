const Invoice = require('../models/invoices');
// const { validationResult } = require('express-validator');
const constants = require('../utils/constant');
const mappers = require('../utils/mappers');

exports.createInvoice = async (req, res, next) => {
  try {
    const { total, id, items, invoiceDate, user } = req.body;
    const newInvoice = new Invoice({
      total,
      id,
      items,
      invoiceDate,
      user
    });
    newInvoice
      .save()
      .then(() => {
        res.status(201).json({
          message: constants.CREATE_INVOICE_SUCCESS_MESSAGE,
        });
      })
      .catch((err) => {
        next(err);
      });
  } catch (err) {
    next(err);
  }
};

exports.listInvoice = async (req, res, next) => {
  try {
    Invoice.find({})
    .populate('user', {"_id": 0, "telephoneNo": 0, "createdAt": 0, "updatedAt": 0, "__v": 0})
    .populate('items.itemId', {"_id": 0, "createdAt": 0, "updatedAt": 0, "__v": 0})
    .exec()
    .then((invoices) => {
      res.status(200).json({
        invoices: mappers.invoicesList(invoices),
      });
    });
  } catch (err) {
    next(err);
  }
};

