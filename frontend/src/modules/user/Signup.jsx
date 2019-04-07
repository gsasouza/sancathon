import * as React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';

import TextField from '../common/TextField';
import Button from '../common/Button.js'
import backgroundImage from '../../assets/background-padrao.png';
import logo from '../../assets/logomarca.png';
import CreateUserMutation from './mutation/CreateUserMutation';
import { login } from '../security/security';
import { withSnackbar } from '../snackbar';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled(Column)`
  justify-content: space-evenly;
  height: 100%;
  padding: 0 15px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  height: 150px;
  width: auto;
  align-self: center;
`;

const ButtonWrapper = styled(Column)`
  button {
    margin: 10px;
  }
  margin: 0 -10px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const LoginInnerForm = ({ history, values, handleChange, handleSubmit }) => {
  console.log(values);
  return (
    <Wrapper>
      <Image src={logo} alt={'Sobera'}/>
      <Column>
        <TextField
          required
          label="Nome"
          margin="normal"
          variant="outlined"
          name={'name'}
          value={values['name']}
          onChange={handleChange}
        />
        <TextField
          required
          label="E-mail"
          margin="normal"
          variant="outlined"
          value={values['email']}
          name={'email'}
          onChange={handleChange}
        />
        <TextField
          required
          label="Senha"
          margin="normal"
          value={values['password']}
          variant="outlined"
          name={'password'}
          onChange={handleChange}
        />
        <TextField
          required
          label="Cidade"
          margin="normal"
          variant="outlined"
          value={values['city']}
          name={'city'}
          onChange={handleChange}
        />
        <TextField
          required
          label="Telefone"
          margin="normal"
          variant="outlined"
          value={values['telephone']}
          name={'telephone'}
          onChange={handleChange}
        />
        <ButtonWrapper>
          <Button variant={'contained'} color='secondary' width={'100%'} onClick={() => history.goBack()}>
            Voltar
          </Button>
          <Button variant={'contained'} color='primary' width={'100%'} onClick={handleSubmit}>
            Cadastrar
          </Button>
        </ButtonWrapper>
      </Column>

    </Wrapper>
  )
};

export default withSnackbar(
  withFormik({
    mapPropsToValues: () => ({ username: '', password: '', name: '', telephone: '', city: '' }),
    handleSubmit: (values, formikBag) => {
      const { setSubmitting, props } = formikBag;
      const { password, email, name } = values;

      const input = {
        password,
        email,
        name
      };

      const onError = () => {
        props.showSnackbar({ type: 'error', message: 'Ocorreu um erro ao realizar a operação' });
        setSubmitting(false);
      };

      const onCompleted = ({ CreateUser: { token, error } }) => {
        if (error) return props.showSnackbar({ type: 'error', message: 'Email ou senha inválida' });
        login(token);
        setSubmitting(false);
        props.history.push('/');
      };

      CreateUserMutation.commit(input, onCompleted, onError);
    }
  })(LoginInnerForm)
);
