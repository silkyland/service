import gql from "graphql-tag";
import update from "immutability-helper";
import { GET_ALERT } from "../../query/alert";

const resolvers = {
  Mutation: {
    setAlert: (_, args, { cache, getCacheKey }) => {
      const { alert } = cache.readQuery({ query: GET_ALERT });
      const data = update(alert, {
        args
      });
      cache.writeData();
    }
  }
};

export default resolvers;
