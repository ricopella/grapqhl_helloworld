const express = require('express'),
    { graphql, buildSchema } = require('graphql'),
    graphqlHTTP = require('express-graphql'),
    app = express(),
    port = process.env.PORT || 4000;;

const schema = buildSchema(`
  type Query {
    hello: String,
  }
`);

// Root provides a resolver function for reach API endpoint
const root = {
    hello: () => `Hello world!`,
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.use((req, res) => res.status(404).send("Sorry can't find that!"));
app.listen(port, () => console.log(`==> 🌎  Running a GraphQL API server at http://localhost:${port}/graphql`));