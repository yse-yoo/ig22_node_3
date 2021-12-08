exports.index = (req, res) => {
    let data = {}
    data.message = 'ようこそ！！！'
    res.render('index.ejs', data) 
}

exports.profile = (req, res) => {
    let data = {}
    data.title = 'Profile'
    res.render('profile/index.ejs', data)
}