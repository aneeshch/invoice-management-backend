const express = require('express');

const invoicesController = require('../controllers/invoices');

const router = express.Router();

router.post(
  '/invoice',
  invoicesController.createInvoice,
);

router.get(
  '/invoices',
  invoicesController.listInvoice,
);

module.exports = router;
