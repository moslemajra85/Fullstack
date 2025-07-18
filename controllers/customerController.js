const Customer = require("../models/customer");

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();

    res.status(200).send(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findById(id);
    if (!customer) {
      res.status(404).send("Customer With the provided Id was not Found");
      return;
    }

    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createCustomer = async (req, res) => {
  try {
    const customer = new Customer({
      ...req.body,
    });

    const result = await customer.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Customer.findByIdAndUpdate(id, req.body);

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Customer.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
