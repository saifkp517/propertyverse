import express, { Express, Request, Response } from "express";
// import { auth } from "express-openid-connect";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import mongoose, { mongo } from "mongoose";

const app: Express = express();
const port = 3000

//obtain pool for queries only
//const pool = require('./db.js')

//oauth config
// const config = {
// 	authRequired: false,
// 	auth0Logout: true,
// 	secret: 'i67d4-PInDKZ1Sj33Qb5PGZ4yTDuCzXiORl6Jbyu-dq_oZe-cqrTq0OurfydPlms',
// 	baseURL: 'http://localhost:3000',
// 	clientID: '7Mkb0kFGTmMU595guE7uayXCmailyJCF',
// 	issuerBaseURL: 'https://dev-q3o8rutdmx66djsw.us.auth0.com'
// };

// app.use(auth(config))

//mongodb initialization
const uri = "mongodb://127.0.0.1:27017"

mongoose.set('strictQuery', false)

mongoose.connect(uri)
	.then(() => console.log("connected to db!"))
	.catch(err => console.error(err))

//initialize multer storage location
let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './images')
	},
	filename: function (req, file, cb) {
		file.originalname = Date.now() + file.originalname
		cb(null, file.originalname)
	}
})

const upload = multer({ storage: storage })

//////////////////////////////////api endpoints///////////////////////////////////////////////

const Properties = require('./db')

app.post('/create-prop', upload.single('file'), async (req, res) => {
	const { total_raise_amt, rental_yeild, irr, location, tenure } = req.body;

	try {
		const property = new Properties({
			total_raise_amt: total_raise_amt,
			rental_yeild: rental_yeild,
			irr: irr,
			location: location,
			tenure: tenure,
			pic_id: req.file?.path
		})

		await property.save()
			.then((data: any) => {
				console.log(data)
				res.json(data)
			})
			.catch((err: Error) => console.error(err))
	}
	catch (err) {
		console.log(err)
	}
})

// app.get('/', async (req, res) => {
// 	try {
// 		if (req.oidc.isAuthenticated())
// 		{
// 			console.log(req.oidc.accessToken)
// 			console.log(req.oidc.refreshToken)
// 			res.send(JSON.stringify(req.oidc.user))
			
// 		}
// 		else
// 		{
// 			res.send("Not logged in")
// 		}
// 	}
// 	catch (err) {
// 		console.error(err)
// 	}
// })


//////////////////////////////////api endpoints///////////////////////////////////////////////

app.listen(port, () => {
	console.log("running on port: " + port)
})
