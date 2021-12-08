exports.edit = (req, res) => {
    const id = req.params.id
    const message = 'User ID is ' + id
    res.send(message)
}