require('dotenv').config();
const app = require("./server.js");
const port = 4000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})
