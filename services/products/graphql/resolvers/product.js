import { products } from "../mocks/mock";
export default {
  query: {
    topProducts(_, args) {
      console.log("TopProductssss");
      return products.slice(0, args.first);
    }
  },
  mutations: {},
  resolvers: {
    Product: {
      __resolveReference(object) {
        console.log("Entrando por aquí");
        return products.find(product => product.upc === object.upc);
      }
    }
  }
};
