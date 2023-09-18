const app = require('express')()

app.get('/', (req, res) => {
    res.send('Docker is easy')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})