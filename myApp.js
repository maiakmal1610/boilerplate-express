let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('Server running on port ${port}');
});



































 module.exports = app;
