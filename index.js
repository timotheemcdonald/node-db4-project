const server = require('./server.js')

const PORT = 7777

server.listen(PORT, () => {
    console.log(`Let's get cooking ${PORT} !`)
})