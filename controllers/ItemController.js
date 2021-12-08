//Item.js をよみこみ
const item = require('../models/item')

exports.index = (req, res) => {
    let data = {}
    data.title = '商品リスト'
    data.items = item.values
    res.render('item/index.ejs', data)
}

//商品を ID で取得（しゅとく）
exports.show = (req, res) => {
    const id = req.params.id
    let data = {}
    data.title = '商品データ'
    data.item = item.find(id)
    res.render('item/show.ejs', data)
}
