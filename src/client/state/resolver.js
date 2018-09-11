import gql from "graphql-tag";
import update from "immutability-helper";

const resolver = {
  Query: {
    app: (_, args, { cache }) => {
      console.log(cache);
      return true;
    }
  },
  Mutation: {
    changeAppName: (_, { name }, { cache }) => {
      const previous = cache.readQuery({
        query: gql`
          query getApp {
            app @client {
              name
            }
          }
        `
      });

      const data = {
        name: update(previous, { $set: "ทดสอบ" })
      };

      cache.writeQuery({
        query: gql`
          query getApp {
            app @client {
              name
            }
          }
        `,
        data
      });
      return { name: "ทดสอบ" };
    }
  }
};

export default resolver;
