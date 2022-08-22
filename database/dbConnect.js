//MongoDB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test',
    {
        useNewUrlParser: true
    });
mongoose.connection.once('open', function () {
    console.log('Database connected Successfully');
}).on('error', function (err) {
    console.log('Error', err);
})