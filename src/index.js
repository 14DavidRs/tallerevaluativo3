// src/index.js (añadir)
const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

// routes
const tasksRoutes = require('./routes/tasks');
app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => res.send('API running'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
