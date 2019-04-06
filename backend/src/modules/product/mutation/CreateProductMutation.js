// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import Product from '../ProductModel';
import ProductType from '../ProductType';
import { generateToken } from '../../../auth';

export default mutationWithClientMutationId({
  name: 'CreateProduct',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, quantity, price }) => {
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
