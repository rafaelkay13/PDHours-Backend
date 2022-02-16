const { pool } = require('../database/config_db')

async function createEmployee(employee) {
    const query = 'INSERT INTO employees (name, estimated_hours, squad_id) VALUES ($1, $2, $3) returning id';
    const values = [employee.name, employee.estimatedHours, employee.squadId];
    let res = await pool.query(query, values)
    return res.rows;
  }
  
  async function getEmployee(employeeId) {
    const query = 'SELECT * FROM employees WHERE id = $1';
    const values = [employeeId];
    let res = await pool.query(query, values)
    return res.rows;
  }

  async function getEmployeeList() {
    const query = 'SELECT * FROM employees';
    let res = await pool.query(query)
    return res.rows;
  }
  
  async function updateEmployee(employee) {
    const query = 'UPDATE employees SET name = $2, estimated_hours = $3, squad_id = $4 WHERE id = $1';
    const values = [employee.id, employee.name, employee.estimatedHours, employee.squadId];
    return pool.query(query, values);
  }
  
  async function deleteEmployee(employeeId) {
    const query = 'DELETE FROM employees WHERE id = $1';
    const values = [employeeId];
    let res = await pool.query(query, values);
    return res;
  }

  module.exports = { createEmployee, getEmployee, getEmployeeList, updateEmployee, deleteEmployee }