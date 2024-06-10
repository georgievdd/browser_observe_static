const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const app = express()
app.use((req, res, next) => {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Client IP: ${clientIp}`);
    next();
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :remote-addr :user-agent'))
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.listen(8000, () => {
    console.log("server started")
});
