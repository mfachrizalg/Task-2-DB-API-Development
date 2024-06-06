const express = require('express');
const app = express();
const port = 3500;

app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('Good Reading Bookstore API');
    });

//route
app.use('/author', require('./api/routes/authorRoutes'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });