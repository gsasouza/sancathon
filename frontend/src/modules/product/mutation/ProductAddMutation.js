import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation ProductAddMutation($input: ProductAddInput!) {
    ProductAdd(input: $input){
      article {
        name
        quantity
        price
      }
      error
    }
  }
`;

function commit({ name, quantity, price }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        name,
        quantity,
        price,
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
