const pool = require('../modules/pool.js');
const express = require('express');
const router = express.Router();


// router.get('/', (req, res) => {
//   console.log('GET /songs');
//   const sqlText = 'SELECT * FROM songs;';
//   pool.query(sqlText)
//     .then((dbResult) => {
//       console.log(`${dbResult.rows.length} rows to send.`)
//       res.send(dbResult.rows);
//     })
//     .catch((dbErr) => {
//       console.error(dbErr);
//       res.sendStatus(500);
//     });
// });

// // :id is a ROUTE PARAMETER
//   // the entire path of this route is
//   // /songs/:id
//   // To hit this route, we'd need a request like:
//     // GET /songs/123
// router.get('/:id', (req, res) => {
//   console.log('GET /songs/:id')
//   console.log('req.params:', req.params);
//   const songId = req.params.id;
//   console.log('songId:', songId);
//   // // We want to use the value that comes in through
//   // // :id in a SQL query, so we can do something like:
//   // // SELECT * FROM "songs" WHERE id=$1 ($1 will get
//   // // the value that comes in on :id)
//   const sqlText = `
//     SELECT * FROM "songs"
//       WHERE "id"=$1;
//   `;
//   const sqlValues = [ songId ];
//   pool.query(sqlText, sqlValues)
//     .then((dbResult) => {
//       // Note that dbResult.rows is an ARRAY with
//       // a single OBJECT inside of it:
//       console.log('dbResult.rows:', dbResult.rows);
//       res.send(dbResult.rows);
//     })
//     .catch((dbErr) => {
//       console.error(dbErr);
//       res.sendStatus(500);
//     });
  
// })

// router.post('/', (req, res) => {
//   console.log('POST /songs');
//   console.log('req.body:', req.body);
//   const newSong = req.body;
//   const sqlText = `
//     INSERT INTO "songs"
//       ("rank", "artist", "track", "published")
//     VALUES
//       ($1, $2, $3, $4);
//   `;
//   const sqlValues = [
//     newSong.rank,
//     newSong.artist,
//     newSong.track,
//     newSong.published
//   ];
//   pool.query(sqlText, sqlValues)
//     .then((dbResult) => {
//       console.log('\tINSERT succeeded.');
//       res.sendStatus(201);
//     })
//     .catch((dbErr) => {
//       console.error(dbErr);
//       res.sendStatus(500);
//     });
// });

// // Here's our DELETE route!
//   // To hit this route, we'd need a request like:
//     // DELETE /songs/123
// router.delete('/:id', (req, res) => {
//   console.log('DELETE /songs/:id');
//   console.log('req.params:', req.params);
//   const songIdToDelete = req.params.id;
//   const sqlText = `
//     DELETE FROM "songs"
//       WHERE "id"=$1;
//   `;
//   const sqlValues = [ songIdToDelete ];

//   pool.query(sqlText, sqlValues)
//     .then((dbResult) => {
//       res.sendStatus(200);
//     })
//     .catch((dbErr) => {
//       console.error(dbErr);
//       res.sendStatus(500);
//     })
// });

// router.put('/upvotes/:id', (req, res) => {
//   console.log('req.params', req.params);
//   console.log('req.body', req.body);
//   const songIdToUpdate = req.params.id;
//   let currentRank = Number(req.body.currentRank);
//   currentRank += 1;
//   const sqlText = `
//     UPDATE "songs"
//       SET "rank"=$1
//       WHERE "id"=$2;
//   `;
//   const sqlValues = [
//     currentRank,
//     songIdToUpdate
//   ]

//   pool.query(sqlText, sqlValues)
//     .then((dbResult) => {
//       res.sendStatus(200);
//     })
//     .catch((dbErr) => {
//       console.error(dbErr);
//       res.sendStatus(500);
//     })
// });
// // UPDATE table_name
// // SET column1 = value1, column2 = value2, ...
// // WHERE condition;
// router.put('/:id', (req, res) => {
//   console.log(req.params);
//   console.log(req.body);
//   const songId = req.params.id;
//   const artist = req.body.artist;
//   const track = req.body.track;
//   const rank = req.body.rank;
//   const published = req.body.published;

//   const sqlText = `
//     UPDATE "songs"
//       SET
//         "artist"=$1,
//         "track"=$2,
//         "rank"=$3,
//         "published"=$4
//       WHERE "id"=$5
//   `;
//   const sqlValues = [
//     artist,
//     track,
//     rank,
//     published,
//     songId
//   ];
//   console.log('sqlText', sqlText);
//   console.log('sqlValues', sqlValues);
//   pool.query(sqlText, sqlValues)
//     .then((dbResult) => {
//       res.sendStatus(200);
//     })
//     .catch((dbErr) => {
//       console.error(dbErr);
//       res.sendStatus(500);
//     });
// });

module.exports = router;