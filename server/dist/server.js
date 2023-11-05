"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_openid_connect_1 = require("express-openid-connect");
const multer_1 = __importDefault(require("multer"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3000;
//obtain pool for queries only
//const pool = require('./db.js')
//oauth config
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'i67d4-PInDKZ1Sj33Qb5PGZ4yTDuCzXiORl6Jbyu-dq_oZe-cqrTq0OurfydPlms',
    baseURL: 'http://localhost:3000',
    clientID: '7Mkb0kFGTmMU595guE7uayXCmailyJCF',
    issuerBaseURL: 'https://dev-q3o8rutdmx66djsw.us.auth0.com'
};
app.use((0, express_openid_connect_1.auth)(config));
//mongodb initialization
const uri = "mongodb://127.0.0.1:27017";
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(uri)
    .then(() => console.log("connected to db!"))
    .catch(err => console.error(err));
//initialize multer storage location
let storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images');
    },
    filename: function (req, file, cb) {
        file.originalname = Date.now() + file.originalname;
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
//////////////////////////////////api endpoints///////////////////////////////////////////////
const Properties = require('./db');
app.post('/create-prop', upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { total_raise_amt, rental_yeild, irr, location, tenure } = req.body;
    try {
        const property = new Properties({
            total_raise_amt: total_raise_amt,
            rental_yeild: rental_yeild,
            irr: irr,
            location: location,
            tenure: tenure,
            pic_id: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path
        });
        yield property.save()
            .then((data) => {
            console.log(data);
            res.json(data);
        })
            .catch((err) => console.error(err));
    }
    catch (err) {
        console.log(err);
    }
}));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.oidc.isAuthenticated()) {
            console.log(req.oidc.user);
            res.send(req.oidc.user);
        }
    }
    catch (err) {
        console.error(err);
    }
}));
//////////////////////////////////api endpoints///////////////////////////////////////////////
app.listen(port, () => {
    console.log("running on port: " + port);
});
