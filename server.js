//Muhammad Fachrizal Giffari (22/504570/TK/55192)
//Reference : https://www.youtube.com/watch?v=DihOP19LQdg&t=2s

const express = require('express');
const app = express();
const port = 3500;

app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('Good Reading Bookstore API');
    console.log('Good Reading Bookstore API');
    });

//route
app.use('/author', require('./api/routes/authorRoutes'));
app.use('/view', require('./api/routes/viewRoutes'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });