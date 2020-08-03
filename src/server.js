require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";

const PORT = process.env.PORT || 4000;

const typeDefs = `type Query{
    hello: String!
}`;

const resolvers = {
    Query: {
        hello: () => "Hi"
    }

};

const server = new GraphQLServer({ typeDefs, resolvers });

server.express.use(logger("dev"));// express 서버에서 logger 미들웨어를 사용하도록 해줌.

server.start({ port: PORT }, () => console.log(`Server running on http://localhost:${PORT}`));
