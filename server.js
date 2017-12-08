var express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
var PORT = process.env.PORT || 3000

var app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js')

app.use('/', routes)

app.listen(PORT, () => {
	console.log(`App listening on ${PORT}`)
})