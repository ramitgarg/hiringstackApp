const express = require('express')
const app = express()
var cors = require('cors')
const port = 4000
app.use(cors())

app.get('/users', (req, res) => res.send('Hello World!'))

//app.post('/users/register', (req, res) => res.send('Hello World!'))


// app.post('/user', (req, res) => res.send('Hello World!'))

app.post('/users/authenticate', function (req, res) {
  //res.ok = true;
 //  res.status(200).json({
 //        ok: 'Welcome to the project-name api'
	// });
  res.json({
  	"asdasd" :"dsada"
  });
})

app.post('/users/register', function (req, res) {
	res.ok = true;
  res.text = "data is allowed";
  res.send('successful placed');
})

app.put('/users', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/users', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
