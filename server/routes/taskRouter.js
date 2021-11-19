const pool = require('../modules/pool.js');
const express = require('express');
const router = express.Router();

//get route
router.get('/', (req, res) => {
console.log('GET /tasks');
  const sqlText = 'SELECT * FROM "Checklist";';
pool.query(sqlText)
    .then((dbResult) => {
    console.log(`${dbResult.rows.length} rows to send.`)
    res.send(dbResult.rows);
    })
    .catch((dbErr) => {
    console.error('This is a get error', dbErr);
    res.sendStatus(500);
    });
});

//Post route
router.post('/', (req, res) => {
console.log('POST /tasks');
console.log('req.body:', req.body);
const newTask = req.body;
const sqlText = `
    INSERT INTO "Checklist"
    ("task", "status")
    VALUES
    ($1, $2);
`;
const sqlValues = [
    newTask.task,
    false
];
pool.query(sqlText, sqlValues)
    .then((dbResult) => {
    console.log('\tINSERT succeeded.');
    res.sendStatus(201);
    })
    .catch((dbErr) => {
    console.error(dbErr);
    res.sendStatus(500);
    });
});

//Delete route
router.delete('/:id', (req, res) => {
console.log('DELETE /tasks/:id');
console.log('req.params:', req.params);
const taskIdToDelete = req.params.id;
const sqlText = `
    DELETE FROM "Checklist"
    WHERE "id"=$1;
`;
const sqlValues = [ taskIdToDelete ];

pool.query(sqlText, sqlValues)
    .then((dbResult) => {
    res.sendStatus(200);
    })
    .catch((dbErr) => {
    console.error(dbErr);
    res.sendStatus(500);
    })
});

router.put('/taskUpdate/:id', (req, res) => {
console.log('req.params', req.params);
console.log('req.body', req.body);
const taskIdToUpdate = req.params.id;
const sqlText = `
    UPDATE "Checklist"
    SET "status"=$1
    WHERE "id"=$2;
`;
const sqlValues = [
    true,
    taskIdToUpdate
]
pool.query(sqlText, sqlValues)
    .then((dbResult) => {
    res.sendStatus(200);
    })
    .catch((dbErr) => {
    console.error(dbErr);
    res.sendStatus(500);
    })
});

module.exports = router;