const typeDefs = `
    enum Role {
        ADMIN
        USER
    }

    type Auth {
        token: String!
        id: ID!
        name: String
        role: Role
        username: String
        email: String
    }
    
    type Query {
        alert : Alert
        auth: Auth
    }

    type Mutation {
        login(username: String!, password: String!){
            token
            id,
            name,
            role
            username
            email
        }
        setAuth(
            id: ID!
            name: String!
            role: Role!
            username: String!
            email: String!
        ){
            id
            name
            role
            username
            email
        }
        setAlert( 
            color: String
            status : Boolean
            message: String
            title: String
        ){
            color
            status
            message
            title
        }
    }
`;
export default typeDefs;
