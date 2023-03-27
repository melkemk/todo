const express = require('express');
const cors = require('cors');
const fs = require('fs')
let data = require('./data.json')
let i = 0;
const app = express();
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.json(data);
});
app.post('/', (req, res, next) => {
    data.book.push(req['body']['bookName'])
    fs.writeFile('./data.json', JSON.stringify(data), err => { err ? console.log(err) : console.log("written") })
    res.send('successful')
})
app.delete('/:id', (req, res) => {
    let toBeDeleted = req.params.id;
    data.book = data.book.filter(item => item !== toBeDeleted);
    fs.writeFile('./data.json', JSON.stringify(data), err => {
        err ? console.log(err) : console.log("written");
    });
});
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

