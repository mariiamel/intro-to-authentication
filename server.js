const express = require('express')
const app = express()
const rowdy = require('rowdy-logger')

// middleware
const rowdyRes = rowdy.begin(app)
app.use(require('morgan')('tiny'))
app.set('view engine', 'ejs')
app.use(require('express-ejs-layouts'))
app.use(express.urlencoded({ extended: false }))

app.get('/signUp', (req, res) => {
  res.render('signUp')
})

// routes
app.get('/', (req, res) => {
  res.render('index')
})


app.use('/users', require('./controllers/userController'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('server started!');
  rowdyRes.print()
})