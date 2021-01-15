
exports.usersList = (data) => data.map((eachUser) => ({
  firstName: eachUser.firstName,
  lastName: eachUser.lastName,
  address: eachUser.address,
  telephoneNo: eachUser.telephoneNo,
  id: eachUser.id
}));

exports.itemsList = (data) => data.map((eachItem) => ({
  itemName: eachItem.name,
  price: eachItem.price,
  id: eachItem.id,
}));

const mapItems = (data) => data.map(eachItem=>({
    Name: eachItem.itemId.name,
    Desription: eachItem.itemId.description,
    Price: eachItem.itemId.price,
    Quantity: eachItem.quantity
}));

exports.invoicesList = (data) => data.map((eachInvoice) => ({
    _id: eachInvoice._id,
    total: eachInvoice.total,
    id: eachInvoice.id,
    items: mapItems(eachInvoice.items),
    invoiceDate: eachInvoice.invoiceDate,
    user: eachInvoice.user.firstName + ' ' + eachInvoice.user.lastName,
    address: eachInvoice.user.address
}));
