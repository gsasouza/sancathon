import * as React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'Yup';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginInnerForm = () => {
  return (
    <Wrapper>

    </Wrapper>
  )
};

export default withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string().required(),
  }),
  handleSubmit: () => console.log('here');
})(LoginInnerForm);
