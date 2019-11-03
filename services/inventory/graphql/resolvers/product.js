import { inventory } from "../mocks/mock";
export default {
  query: {},
  mutations: {},
  resolvers: {
    Product: {
      __resolveReference(object) {
        console.log("myobject", object);
        return {
          ...object,
          ...inventory.find(product => product.upc === object.upc)
        };
      },
      shippingEstimate: (object)  => {
        console.log(object)
        // free for expensive items
        if (object.price > 1000) return 0;
        // estimate is based on weight
        return object.weight * 0.5;
      }
    }
  }
};
