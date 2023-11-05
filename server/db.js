// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: 'saif',
//     password: 'clam',
//     host: 'localhost',
//     port: 5432,
//     database: 'propertyverse'
// })

// module.exports = pool

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Properties = new Schema({
    total_raise_amt: String,
    rental_yeild: Number,
    irr: Number,
    location: String,
    tenure: Number,
    pic_id: String
})

module.exports = mongoose.model('Properties', Properties)
