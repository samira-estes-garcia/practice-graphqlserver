const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema.js')
const PORT = process.env.PORT || 3000

const app = express()

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  )

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))