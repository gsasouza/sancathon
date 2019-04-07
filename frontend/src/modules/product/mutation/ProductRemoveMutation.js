import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation ProductRemoveMutation($input: ProductRemoveInput!) {
    AuthorRemove(input: $input){     
      error
    }
  }
`;

function commit({ id }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        id
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
