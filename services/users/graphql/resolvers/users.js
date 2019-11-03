import { users } from "../mocks/mock";
export default {
  query: {
    me: () => {
      console.log("Entrando");
      return users[0];
    }
  },
  mutations: {},
  resolvers: {}
};
