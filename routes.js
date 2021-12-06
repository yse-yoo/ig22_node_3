const express = require('express')
//Item.js をよみこみ
const item = require('./Item')
const router = express.Router()

//商品を ID で検索(けんさく)
router.get('/item/:id', (req, res) => {
    const id = req.params.id
    let data = {}
    data.title = '商品データ'
    data.item = null
    if (item.values[id]) {
        data.item = item.values[id]
    }
    res.render('item/show.ejs', data)
})

router.get('/user/edit/:id', (req, res) => {
    const id = req.params.id
    const message = 'User ID is ' + id
    res.send(message)
})

//Amazon の商品しょうさい
router.get('/dp/:id', (req, res) => {
    const id = req.params.id
    const message = 'Item ID is ' + id
    res.send(message)
})

router.post('/auth', (req, res) => {
    const login_name = req.body.login_name
    const password = req.body.password

    let message = 'ログインできません'
    if (login_name == process.env.LOGIN_NAME
        && password == process.env.PASSWORD) {
        message = 'ログインしました'
    }
    res.send(message)
})

router.get('/', (req, res) => {
    let data = {}
    data.message = 'ようこそ！！！'
    res.render('index.ejs', data)
})

router.get('/profile', (req, res) => {
    let data = {}
    data.title = 'Profile'
    res.render('profile/index.ejs', data)
})

router.get('/login', (req, res) => {
    let data = {}
    data.title = 'ログイン'
    res.render('login/index.ejs', data)
})

module.exports = router