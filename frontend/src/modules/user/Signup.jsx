import * as React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import _FormControlLabel from '@material-ui/core/FormControlLabel';
import ButtonMUI from '@material-ui/core/Button';

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

const ButtonSwitch = styled(ButtonMUI)`
  && {
    border-radius: ${props => props.left ?  '0 30px 30px 0' : '30px 0 0 30px'};
    box-shadow: none;
    width: 120px;
    margin: 10px 0;
    font-weight: bold;
    transition: background-color 0.3s ease-in;
    &:hover{
      background-color: #cc9e4c;
    }
    border: 1px solid #ffd800;
    border-left: ${ props => props.left ? '1px solid #ffd800' : 'none' };
    background-color: ${props => props.isChecked ? '#ffd800' : 'transparent' };
    color: ${props => props.isChecked ? '#000' : '#fff' };
  }

`;

const LoginInnerForm = ({ history, values, handleChange, handleSubmit, setFieldValue }) => {
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
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <ButtonSwitch variant={'contained'} isChecked={values.isOwner} onClick={() => setFieldValue('isOwner', true)}>
            Família
          </ButtonSwitch>
          <ButtonSwitch variant={'contained'} left isChecked={!values.isOwner} onClick={() => setFieldValue('isOwner', false)}>
            Sobelover
          </ButtonSwitch>
        </div>
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
    mapPropsToValues: () => ({ username: '', password: '', name: '', telephone: '', city: '', isOwner: false }),
    handleSubmit: (values, formikBag) => {
      const { setSubmitting, props } = formikBag;
      const { password, email, name, isOwner } = values;

      const input = {
        password,
        email,
        name,
        isOwner
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
