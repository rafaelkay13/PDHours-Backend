const express = require('express')
const { pool } = require('../database/config_db')
const router = express.Router()
const { createEmployee, getEmployee, getEmployeeList, updateEmployee, deleteEmployee } = require('../services/employee_service')
const { createSquad, getSquad, getSquadList, updateSquad, deleteSquad } = require('../services/squad_service')
const { createReport, getReport, getReportList, updateReport, deleteReport } = require('../services/report_service')
const { getHoursByEmployee, getTotalHours, getHoursMedia, getReportsBySquad } = require('../services/hours_service')

router.get('/', (req, res) => {
    res.send('Página Principal')
})

//------------EMPLOYEE------------

// Para realizar o cadastro de employee, é necessário informar o "name", "estimatedHours" e "squadId";
// O "squadId" informado deve existir na tabela de "Squads".

router.post('/employee', async (req, res) => {
console.log(req.body)
    let employee = req.body;
    try {
        let result = await createEmployee(employee);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.get('/employee/:id', async (req, res) => {
    let employeeId = req.params.id;
    try {
        let result = await getEmployee(employeeId);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.get('/employees', async (req, res) => {

    try {
        let result = await getEmployeeList();
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/employee/update', async (req, res) => {

    let employee = req.body;
    try {
        let result = await updateEmployee(employee);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/employee/:id/delete', async (req, res) => {
    let employeeId = req.params.id;
    try {
        let result = await deleteEmployee(employeeId);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

//------------SQUAD------------

// Para realizar o cadastro de squad, é necessário informar o "name".

router.post('/squad', async (req, res) => {

    let squad = req.body;
    try {
        let result = await createSquad(squad);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.get('/squad/:id', async (req, res) => {
    let squadId = req.params.id;
    try {
        let result = await getSquad(squadId);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.get('/squads', async (req, res) => {

    try {
        let result = await getSquadList();
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/squad/update', async (req, res) => {

    let squad = req.body;
    try {
        let result = await updateSquad(squad);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/squad/:id/delete', async (req, res) => {
    let squadId = req.params.id;
    try {
        let result = await deleteSquad(squadId);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

//------------REPORT------------

// Para realizar o cadastro de report, é necessário informar "description", "employeeId", "spentHours";
// O campo "createdAt" deve ser preenchido automaticamente ao criar um report com a data e hora do momento da criação;
// O "employeeId" informado deve existir na tabela de "Employee"

router.post('/report', async (req, res) => {

    let report = req.body;
    try {
        let result = await createReport(report);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.get('/report/:id', async (req, res) => {
    let reportId = req.params.id;
    try {
        let result = await getReport(reportId);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.get('/reports', async (req, res) => {

    try {
        let result = await getReportList();
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/report/update', async (req, res) => {

    let report = req.body;
    try {
        let result = await updateReport(report);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/report/:id/delete', async (req, res) => {
    let reportId = req.params.id;
    try {
        let result = await deleteReport(reportId);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

//------------HOURS------------

// Criar uma rota que retorne as horas gastas de cada membro de uma determinada squad em um determinado período 
//(Parâmetros: squadId e período - pode considerar dias corridos).

router.post('/hoursByEmployee', async (req, res) => {

    let data = req.body;
    try {
        let result = await getHoursByEmployee(data);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

// Criar uma rota que retorne o tempo total gasto de uma squad em um determinado período, ou seja, a quantidade total de horas realizadas pelos membros daquela squad 
//(Parâmetros: squadId e período - pode considerar dias corridos).

router.post('/totalHours', async (req, res) => {

    let data = req.body;
    try {
        let result = await getTotalHours(data);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

// Criar uma rota que retorne a média gasta de hora por dia de uma squad em um determinado período.
// (Parâmetros: squadId e período - pode considerar dias corridos).

router.post('/mediaHours', async (req, res) => {
	console.log(req.body)
    let data = req.body;
    try {
        let result = await getHoursMedia(data);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

router.post('/reportsBySquad', async (req, res) => {
	console.log(req.body)
    let data = req.body;
    try {
        let result = await getReportsBySquad(data);
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

//---------------END-------------------


module.exports = router;