const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Namaste Duniya!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
// i have added http://locathost: