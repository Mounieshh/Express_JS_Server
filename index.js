const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars');
const members = require('./Members')


//Initialize the Express
const app = express()

//Init middleware
//app.use(logger)

// HandleBars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
  

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Home Page Route
app.get('/', (req,res) => res.render('index', {
    title: 'Member App',
    members
}))

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))




//Routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log( `Server started on port ${PORT}`))