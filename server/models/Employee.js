const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  designation: String,
  joiningDate: Date,
  status: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);
