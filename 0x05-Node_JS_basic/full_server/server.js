const express = require('express');
const appRoutes = require('./routes/index');

const app = express();
app.use('/', appRoutes);

app.listen(1245, () => {
})

export default app