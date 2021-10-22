import express from 'express';
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        text: 'Welcome Home!',
        status: 'what?!!!'
    });
})
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}`);
})