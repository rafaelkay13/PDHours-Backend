const { pool } = require('../database/config_db')

async function createReport(report) {
    const query = 'INSERT INTO reports (description, spent_hours, employee_id, created_at) VALUES ($1, $2, $3, $4) returning id';
    const values = [report.description, report.spentHours, report.employeeId, new Date()];
    let res = await pool.query(query, values)
    return res.rows;
  }
  
  async function getReport(reportId) {
    const query = 'SELECT * FROM reports WHERE id = $1';
    const values = [reportId];
    let res = await pool.query(query, values)
    return res.rows;
  }

  async function getReportList() {
    const query = 'SELECT * FROM reports';
    let res = await pool.query(query)
    return res.rows;
  }
  
  async function updateReport(report) {
    const query = 'UPDATE reports SET description = $2, spent_hours = $3, employee_id = $4 WHERE id = $1';
    const values = [report.id, report.description, report.spentHours, report.employeeId];
    return pool.query(query, values);
  }
  
  async function deleteReport(reportId) {
    const query = 'DELETE FROM reports WHERE id = $1';
    const values = [reportId];
    let res = await pool.query(query, values);
    return res;
  }

  module.exports = { createReport, getReport, getReportList, updateReport, deleteReport }