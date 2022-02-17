const { pool } = require('../database/config_db')

async function getHoursByEmployee(data) {
  const query = 'select e.id, e.name, e.squad_id, sum(r.spent_hours) as spent_hours from reports as r join employees as e on r.employee_id = e.id where e.squad_id = $1 and r.created_at >= $2 and r.created_at < $3 group by e.id;;';
  const values = [data.squadId, data.begin, data.end];
  let res = await pool.query(query, values)
  return res.rows;
}

async function getTotalHours(data) {
  const query = 'select sum(r.spent_hours) as result from reports as r join employees as e on r.employee_id = e.id where e.squad_id = $1 and r.created_at >= $2 and r.created_at < $3;';
  const values = [data.squadId, data.begin, data.end];
  let res = await pool.query(query, values)
  return res.rows[0];
}


async function getHoursMedia(data) {
  const query = 'select sum(r.spent_hours) as result from reports as r join employees as e on r.employee_id = e.id where e.squad_id = $1 and r.created_at >= $2 and r.created_at < $3;';
  const values = [data.squadId, data.begin, data.end];
  let res = await pool.query(query, values)
  let time = await getDays(data)
  let result = Math.floor(parseInt(res.rows[0].result)/time).toString()
  return result
}

async function getReportsBySquad(data) {
	console.log(data)
  const query = 'select r.employee_id, e.name, r.description, r.spent_hours, r.created_at from reports as r join employees as e on r.employee_id = e.id where e.squad_id = $1 and r.created_at >= $2 and r.created_at < $3;';
  const values = [data.squadId, data.begin, data.end];
  let res = await pool.query(query, values)
  console.log(res.rows)
  return res.rows;
}

async function getDays(data) {
  let dateArray1 = data.begin.split('T');
  let dateArray2 = data.end.split('T');
  let date1 = dateArray1[0].split('-');
  let date2 = dateArray2[0].split('-');
  date1 = new Date(date1[0], date1[1], date1[2]);
  date2 = new Date(date2[0], date2[1], date2[2]);
  let datetime1 = parseInt(date1.getTime() / 1000);
  let datetime2 = parseInt(date2.getTime() / 1000);
  let timeDifference = datetime2 - datetime1
  let timeDifferenceInHours = timeDifference / 60 / 60;
  let timeDifferenceInDays = timeDifferenceInHours / 24;
  return timeDifferenceInDays
}

module.exports = { getHoursByEmployee, getTotalHours, getHoursMedia, getReportsBySquad }