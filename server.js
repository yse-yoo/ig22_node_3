const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const host = process.env.HOST
const port = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.post('/auth', (req, res) => {
    const login_name = req.body.login_name
    const password = req.body.password

    let message = 'ログインできません'
    if (login_name == process.env.LOGIN_NAME
        && password == process.env.PASSWORD) {
        message = 'ログインしました'
    }
    res.send(message)
})

// app.get(URL, 処理)
app.get('/', (req, res) => {
    console.log(req.query)

    res.send('Hello YSE!!!!!')
})

app.get('/profile', (req, res) => {
    res.send('This is Profile Page!!!!')
})

app.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})