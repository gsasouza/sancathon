import * as React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '../common/Button.js'
import image from '../../assets/background-padrao.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content : center;
  height : 100%;
  background-image: url(${image});
`;

const LoginInnerForm = () => {
  return (

    <Wrapper>
      <TextField
            required
            id="outlined-required"
            label="Usuario"
            defaultValue="Hello World"
            margin="normal"
            variant="outlined"
      />

      <TextField
            required
            id="outlined-required"
            label="Senha"
            defaultValue="Hello World"
            margin="normal"
            variant="outlined"
      />

      <Button variant = "contained"> 
        entrar 
      </Button>

      <Button variant = "contained"> 
        cadastrar  
      </Button>
    </Wrapper>
  )
};

export default withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  handleSubmit: () => console.log('here')
})(LoginInnerForm);
