"use strict";
// const Pool = require("pg").Pool;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const pool = new Pool({
//     user: 'saif',
//     password: 'clam',
//     host: 'localhost',
//     port: 5432,
//     database: 'propertyverse'
// })
// module.exports = pool
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Properties = new Schema({
    total_raise_amt: String,
    rental_yeild: Number,
    irr: Number,
    location: String,
    tenure: Number,
    pic_id: String
});
module.exports = mongoose_1.default.model('Properties', Properties);
