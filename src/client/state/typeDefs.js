const typeDefs = `
    type Alert {
        color: String
        status : Boolean
        message: String
        title: String
    }
    
    type Query {
        alert : Alert
    }

    type Mutation {
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
