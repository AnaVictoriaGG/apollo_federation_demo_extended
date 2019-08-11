import { users } from "../mocks/mock";
export default {
  query: {
    me: () => {
      console.log("Entrando");
      return users[0];
    }
  },
  mutations: {},
  resolvers: {
    Product: {
      __resolveReference(object) {
        return users.find(user => user.id === object.id);
      }
    }
  }
};
