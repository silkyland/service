import gql from "graphql-tag";
import update from "immutability-helper";
import { GET_ALERT } from "../../query/alert";
import { GET_USER, GET_USER_BY_USERNAME_AND_PASSWORD } from "../../query/user";
import { GET_AUTH } from "../../query/auth";
import config from "../../config";

const resolvers = {
  Mutation: {
    login: (_, args, data) => {
      console.log(data);
      // const { users } = cache.readQuery({
      //   query: GET_USER_BY_USERNAME_AND_PASSWORD,
      //   variables: { username: args.username, password: args.password }
      // });
      // let user = users[0];
      // if (!user) {
      //   throw new Error("No data found");
      // }
      // localStorage.setItem("token", config.graphql.token);
      // const data = cache.readQuery({ query: GET_AUTH });
      // cache.writeData({
      //   data: update(data, {
      //     auth: {
      //       $set: {
      //         token: config.graphql.token,
      //         id: user.id,
      //         name: user.name,
      //         role: user.role,
      //         username: user.username,
      //         email: user.email
      //       }
      //     }
      //   })
      // });
    }
  }
};

export default resolvers;
