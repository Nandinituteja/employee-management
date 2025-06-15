import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API;


const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch all employees from backend
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios.get(`${API}/api/employees`)
      .then(res => setEmployees(res.data))
      .catch(err => console.error('Error fetching employees:', err));
  };

  // Delete employee by ID
  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios.delete(`${API}/api/employees/${id}`)

        .then(() => {
          setEmployees(employees.filter(emp => emp._id !== id));
        })
        .catch(err => console.error('Error deleting employee:', err));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee List</h2>

      {/* Add Employee Button */}
      <Link to="/add">
        <button style={{ marginBottom: '15px' }}>Add Employee</button>
      </Link>

      {/* Search Input */}
      <br />
      <input
        type="text"
        placeholder="Search by name or department..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginTop: '10px', padding: '5px', width: '300px' }}
      />
      <br /><br />

      {/* Employee Table */}
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Joining Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .filter(emp =>
              emp.name.toLowerCase().includes(search.toLowerCase()) ||
              emp.department.toLowerCase().includes(search.toLowerCase())
            )
            .map(emp => (
              <tr key={emp._id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{new Date(emp.joiningDate).toLocaleDateString()}</td>
                <td>{emp.status}</td>
                <td>
                  <Link to={`/edit/${emp._id}`}>
                    <button style={{ marginRight: '10px' }}>Edit</button>
                  </Link>
                  <button onClick={() => deleteEmployee(emp._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;