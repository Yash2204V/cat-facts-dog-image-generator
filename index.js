const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')) 
// This serves as a static file, the files are in the public folder/directory.

app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}/`)
});


app.get('/animalname',async (request,response)=>{
  const fetchData = await fetch('https://catfact.ninja/fact');
  const animalNameResponse = await fetchData.json();
  response.json(animalNameResponse);
  // console.log(animalNameResponse);
});

app.get('/animalimage',async (request,response)=>{
  const fetchData = await fetch('https://dog.ceo/api/breeds/image/random');
  const animalNameResponse = await fetchData.json();
  response.json(animalNameResponse);
  // console.log(animalNameResponse);
});