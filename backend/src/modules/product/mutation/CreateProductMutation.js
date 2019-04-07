import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import Product from '../ProductModel';
import ProductType from '../ProductType';

export default mutationWithClientMutationId({
  name: 'CreateProduct',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLString),
    },
    createdby: {
      type: new GraphQLNonNull(GraphQLID),
    },
    price: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, quantity, price, createdby }) => {
    let product = await Product.findOne({ name: name.toLowerCase() });

    if (product) {
      return {
        token: null,
        error: 'EMAIL_ALREADY_IN_USE',
      };
    }

    product = new Product({
      name,
      quantity,
      createdby,
      price,
    });
    await product.save();

    return {
      product,
      error: null,
    };
  },
  outputFields: {
    product: {
      type: ProductType,
      resolve: ({ product }) => product,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
