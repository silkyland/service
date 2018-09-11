const typeDefs = `
    type App {
        name: String
    }

    type Query {
        app: App
    }

    type Mutation {
        changeAppName: App
    }
`;
export default typeDefs;
