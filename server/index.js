const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
require('dotenv').config();
const port = process.env.PORT || 3002

// set express server
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'developement',
}))


app.listen(port, console.log(`Server is running on ${port}`));