require('dotenv').config();

const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect(`mongodb://khushi:khushi@cluster0-shard-00-00.zymki.mongodb.net:27017,cluster0-shard-00-01.zymki.mongodb.net:27017,cluster0-shard-00-02.zymki.mongodb.net:27017/libaray?ssl=true&replicaSet=atlas-2zjo8q-shard-0&authSource=admin&retryWrites=true&w=majority`)
}
// mongodb+srv://khushboo:<password>@cluster0.cfj9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority