exports.values = [
    { id: 1, name: 'コーヒー', price: 150},
    { id: 2, name: '紅茶', price: 170},
    { id: 3, name: 'ほうじ茶', price: 100},
]
exports.find = (id) => {
    return this.values.find((value) => value.id == id)
}