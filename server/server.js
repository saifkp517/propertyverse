const express = require('express')
const cors = require('cors')
const { auth, requiresAuth } = require('express-openid-connect');
const e = require('express');


const app = express();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: '336b8c675214a3eb629a881eac4fee9699c734cbc04866b270aed47cec2a24d1',
    baseURL: 'http://localhost:3000',
    clientID: 'Lp2Y0rnGOmveqHWyRjffbQDeW1877LDQ',
    issuerBaseURL: 'https://dev-znk3kc4x.us.auth0.com'
};

var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    if(req.oidc.isAuthenticated())
    {
        res.status(200).json({message: "Logged In"})
    }
    else
    {
        res.status(200).json({message: "Logged Out"})
    }
});

app.listen(3000, () => {
    console.log("Running on port 3000")
})

app.get('/gettoken', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});