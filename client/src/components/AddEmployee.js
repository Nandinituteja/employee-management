import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API;

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: '',
    designation: '',
    joiningDate: '',
    status: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!employee.name || !employee.email || !employee.department || !employee.designation || !employee.joiningDate || !employee.status) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(employee.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Submit to backend
    axios.post(`${API}/api/employees`, employee)
      .then(() => {
        navigate('/'); // redirect to home
      })
      .catch(err => {
        console.error(err);
        setError('Something went wrong. Please try again.');
      });
  };

  return (
  <div style={{ padding: '20px' }}>
    <h2>Add New Employee</h2>
    {error && <p style={{ color: 'red' }}>{error}</p>}

    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={employee.name} onChange={handleChange} /><br /><br />
      <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} /><br /><br />
      <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} /><br /><br />
      <input type="text" name="designation" placeholder="Designation" value={employee.designation} onChange={handleChange} /><br /><br />
      <input type="date" name="joiningDate" value={employee.joiningDate} onChange={handleChange} /><br /><br />

      <select name="status" value={employee.status} onChange={handleChange}>
        <option value="">-- Select Status --</option>
        <option value="Active">Active</option>
        <option value="On Leave">On Leave</option>
        <option value="Resigned">Resigned</option>
      </select><br /><br />

      <button type="submit">Add Employee</button>
    </form>
  </div>
);}
export default AddEmployee;