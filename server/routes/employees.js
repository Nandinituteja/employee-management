const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// ✅ Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees' });
  }
});

// ✅ Get a single employee by ID (Required for Edit)
router.get('/:id', async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(emp);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Create a new employee
router.post('/', async (req, res) => {
  try {
    const newEmp = new Employee(req.body);
    const saved = await newEmp.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error adding employee' });
  }
});

// ✅ Update employee by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Error updating employee' });
  }
});

// ✅ Delete employee by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting employee' });
  }
});

module.exports = router;