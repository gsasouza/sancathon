import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation LoginUserMutation($input: LoginUserInput!) {
    LoginUser(input: $input){
        token
        error
    }
}
`;

function commit({ email, name, password }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        email,
        name,
        password
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
