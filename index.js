const express = require('express');
const app = express();
const port = 3000;

app.get('/api/method1', (req, res) => {
  res.json({ message: 'Respuesta del método 1' });
});

app.get('/api/method2', (req, res) => {
  res.json({ message: 'Respuesta del método 2' });
});

app.get('/api/method3', (req, res) => {
  res.json({ message: 'Respuesta del método 3' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
  });
}

module.exports = app;