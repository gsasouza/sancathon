import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../../../relay/environment';

const mutation = graphql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    CreateUser(input: $input){
      token
      error
    }
  }
`;

function commit({ email, name, password, isOwner }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        email,
        name,
        isOwner,
        password
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
