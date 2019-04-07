import * as React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '../common/Button.js'
import image from '../../assets/1.jpg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content : center;
  height : 100%;
  {/*background-image: url(${image});*/}
`;

const SignupInnerForm = () => {
  return (

    <Wrapper>
      <TextField
            required
            id="outlined-required"
            label="Seu Nome"
            defaultValue="Hello World"
            margin="normal"
            variant="outlined"
      />

      <TextField
            required
            id="outlined-required"
            label="Seu email"
            defaultValue="Hello World"
            margin="normal"
            variant="outlined"
      />

      <TextField
            required
            id="outlined-required"
            label="Sua senha"
            defaultValue="Hello World"
            margin="normal"
            variant="outlined"
      />

      <TextField
            required
            id="outlined-required"
            label="Sua Cidade"
            defaultValue="Hello World"
            margin="normal"
            variant="outlined"
      />

      <TextField
            required
            id="outlined-required"
            label="Seu telefone"
            defaultValue="Hello World"
            margin="normal"
            variant="outlined"
      />

      <Button variant = "contained"> 
        Criar Conta
      </Button>
    </Wrapper>
  )
};

export default withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  handleSubmit: () => console.log('here')
})(SignupInnerForm);
