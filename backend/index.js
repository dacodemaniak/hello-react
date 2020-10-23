const express = require('express')
const cors = require('cors')

const app = express()
const port = 8080

app.use(cors())

app.get(
    '/item',
    (request, response) => {
        const items = [
            {
                id: 1,
                title: 'First item',
                viewed: false,
                rating: 0
            },
            {
                id: 2,
                title: 'Second item',
                viewed: false,
                rating: 0
            },
            {
                id: 3,
                title: 'Third item',
                viewed: false,
                rating: 0
            }
        ]
        response.json(items)
    }
)

app.listen(
    port,
    () => {
        console.log(`App is listening on port ${port}`)
    }
)