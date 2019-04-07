import * as React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';

import TextField from '../common/TextField';
import Button from '../common/Button.js'

import backgroundImage from '../../assets/background-padrao.png';
import logo from '../../assets/logomarca.png';

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

const LoginInnerForm = () => {
  return (
    <Wrapper>
      <Image src={logo} alt={'Sobera'}/>
      <Column>
        <TextField
          required
          label="Usuario"
          margin="normal"
          variant="outlined"
          onChange={() => console.log('here')}
        />
        <TextField
          required
          label="Senha"
          margin="normal"
          variant="outlined"
        />
        <ButtonWrapper>
          <Button variant={'contained'} color='secondary' width={'100%'}>
            Cadastrar
          </Button>
          <Button variant={'contained'} color='primary' width={'100%'}>
            Entrar
          </Button>
        </ButtonWrapper>
      </Column>

    </Wrapper>
  )
};

export default withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  handleSubmit: () => console.log('here')
})(LoginInnerForm);
