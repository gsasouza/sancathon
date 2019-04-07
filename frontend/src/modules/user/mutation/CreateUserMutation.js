import { graphql, commitMutation } from 'react-relay';
import environment from '../../../relay/environment';

const mutation = graphql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    CreateUser(input: $input){
      token
      error
    }
  }
`;

function commit({ email, name, password,usertype }, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        email,
        name,
        usertype,
        password
      },
    },
    onCompleted,
    onError,
  });
}

export default { commit };
