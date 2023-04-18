// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json())

// app.post('/postReq' , (req , res) => {
//   let data = req.body;
//   res.send(data)
// })


app.use((req , res , next) => {
  console.log('Body : ' , req.body);
  next();
})


app.get('/artists' , (req , res) => {
  let data =getAllArtists();

  res.status(200).json(data);
})

app.post('/artists' , (req , res) => {
  // let data = {
  //   "name": "Led Zeppelin"
  // };

  // let newArtist = addArtist(data);
  let newArtist = addArtist(req.body);

  res.status(201).json(newArtist)

})


app.get('/artist/latest' , (req , res) => {
  let data = getLatestArtist();
  res.status(200).json(data);
})

app.get('/artist/latest/albums' , (req , res) => {
  let data = getAlbumsForLatestArtist();
  res.status(200).json(data);
})


//Order of the routes MATTER----
// CASE 1
app.get('/hello', (req, res) => {
  res.send("First hello");
});
// Blocked Req
app.get('/hello', (req, res) => {
  res.send("Second hello");
});

// CASE 2
// This is bad code! DO NOT DO THIS
// visitors never get to see the other two messages.
app.get('/goodbye/*', (req, res) => {
  res.send("Goodbye, my friend!");
});

app.get('/goodbye/until/:time', (req, res) => {
  res.send(`Goodbye. See you ${req.params.time}.`);
});

app.get('/goodbye/until/forever', (req, res) => {
  res.send("So long. Farewell. Have a great life!");
});

// SOLUTION
// Order the routes from specific to generic
// Place similar paths together



// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
