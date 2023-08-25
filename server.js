const app = require('./app')

const port = process.env.PORT || 3000;

  app.get('/continue/0b92407778a129dd69b0fbe45b47da0e74185ea19026c054f89d9fe0d198', (req, res) => {
  res.send('This is the new route!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
