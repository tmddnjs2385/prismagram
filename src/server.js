require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema.js";

const PORT = process.env.PORT || 4000;

// const typeDefs = `type Query{
//     hello: String!
// }`;

// const resolvers = {
//     Query: {
//         hello: () => "Hi"
//     }

// };  --> 이것 대신에 schema를 server로 입력할 것이다. 

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));// express 서버에서 logger 미들웨어를 사용하도록 해줌.

server.start({ port: PORT }, () => console.log(`Server running on http://localhost:${PORT}`));

