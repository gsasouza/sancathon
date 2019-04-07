import * as React from 'react';
import _MobileStepper from '@material-ui/core/MobileStepper';
import styled from 'styled-components';
import { withFormik } from 'formik';
import Layout from '../Layout';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Button from '../common/Button';
import ScreenTitle from '../common/ScreenTitle';
import TextField from '../common/TextField';

import ProductAddMutation from './mutation/ProductAddMutation';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  height: 100%;
  > div {
    margin: 8px 0;
  }
`;


const steps = [
  {
    label: 'Dados do Produto',
    content: (
      <FormWrapper>
        <TextField variant={'outlined'} fullWidth={true} label={'Nome'}/>
        <TextField variant={'outlined'} fullWidth={true} label={'Descrição'}/>
        <TextField variant={'outlined'} fullWidth={true}label={'Tipo'}/>
      </FormWrapper>
    )
  },
  {
    label: 'Estoque',
    content: <FormWrapper> ESTOQUE</FormWrapper>
  },
  {
    label: 'Adicionais',
    content: <FormWrapper> ADICIONAIS </FormWrapper>
  }
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MobileStepper = styled(_MobileStepper)`
  && {
    background-color: #bebbb8;
  }
`;

const OwnerCreateProduct = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const getStepContent = (step) => steps[step].content;

  return (
    <Layout>
      <Wrapper>
        <ScreenTitle> Cadastrar Produto </ScreenTitle>
        { getStepContent(activeStep) }

        <MobileStepper
          variant="progress"
          steps={steps.length}
          activeStep={activeStep}
          position="static"
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finalizar' : 'Avançar'}
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Voltar
            </Button>
          }
        />
      </Wrapper>
    </Layout>
  )

};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    description: '',

  }),
  handleSubmit: (values, formikBag) => {

      const { setSubmitting, props } = formikBag;
      const { name, email, unit } = values;

      const input = {
        name, email, unit
      };

      const onError = () => {
        //props.showSnackbar({ message: 'Ocorreu um erro ao realizar a operação' });
        setSubmitting(false);
      };

      const onCompleted = ({ AuthorAdd: { error }}) => {
        if (error) return props.showSnackbar({ message: error });
        props.showSnackbar({ message: 'Pesquisador criado com sucesso' });
        setSubmitting(false);
        props.history.push(`/authors`);
      };

      ProductAddMutation.commit(input, onCompleted, onError);
    }
})(OwnerCreateProduct);




