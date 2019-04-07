import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from 'graphql';
import { globalIdField } from 'graphql-relay';

import UserType from '../user/UserType';
import * as UserLoader from '../user/UserLoader';

export default new GraphQLObjectType({
  name: 'Product',
  description: 'Product data',
  fields: () => ({
    id: globalIdField('Product'),
    _id: {
      type: GraphQLString,
      resolve: product => product._id,
    },
    name: {
      type: GraphQLString,
      resolve: product => product.name,
    },
    quantity: {
      type: GraphQLString,
      resolve: product => product.quantity,
    },
    price: {
      type: GraphQLString,
      resolve: product => product.price,
    },
    createdby: {
      type: UserType,
      resolve: product => UserLoader.load(product.createdby),
    },
    active: {
      type: GraphQLBoolean,
      resolve: product => product.active,
    },
  }),
});
