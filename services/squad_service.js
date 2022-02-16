const { pool } = require('../database/config_db')

async function createSquad(squad) {
    const query = 'INSERT INTO squads (name) VALUES ($1) returning id';
    const values = [squad.name];
    let res = await pool.query(query, values)
    return res.rows;
  }
  
  async function getSquad(squadId) {
    const query = 'SELECT * FROM squads WHERE id = $1';
    const values = [squadId];
    let res = await pool.query(query, values)
    return res.rows;
  }

  async function getSquadList() {
    const query = 'SELECT * FROM squads';
    let res = await pool.query(query)
    return res.rows;
  }
  
  async function updateSquad(squad) {
    const query = 'UPDATE squads SET name = $2 WHERE id = $1';
    const values = [squad.id, squad.name];
    return pool.query(query, values);
  }
  
  async function deleteSquad(squadId) {
    const query = 'DELETE FROM squads WHERE id = $1';
    const values = [squadId];
    let res = await pool.query(query, values);
    return res;
  }

  module.exports = { createSquad, getSquad, getSquadList, updateSquad, deleteSquad }