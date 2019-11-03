export default {
  query: {},
  mutations: {},
  resolvers: {
    User: {
      __resolveReference(object) {
        console.log("resolvereference", object);
        return {
          ...object,
        };
      },
      numberClient: ({username, id})  => {
        // free for expensive items
        return id + username;
      }
    },
    
  }
};
