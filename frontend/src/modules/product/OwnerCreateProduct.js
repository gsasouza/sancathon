import * as React from 'react';
import _MobileStepper from '@material-ui/core/MobileStepper';
import styled from 'styled-components';
import { withFormik } from 'formik';
import Layout from '../Layout';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import _Fab from '@material-ui/core/Fab';

import TextField from '../common/TextField';
import withSnackbar from '../snackbar/withSnackbar';
import bgImage from '../../assets/frutas-wizard.png';
import w1 from '../../assets/w1.png';
import w2 from '../../assets/w2.png';
import w3 from '../../assets/w3.png';

import CreateProductMutation from './mutation/CreateProductMutation';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px;
  height: 100%;
  fieldset {
    background-color: white;
    font-size: 22px;
  }
  label {
    font-size: 25px;
    margin-top: -5px;
  }
  > div {
    display: flex; 
    flex-direction: column;
    align-items: center;
    color: #fff;
    width: 100%;
    text-align: center;
    h1 {
      font-style: italic;
      font-size: 20px
    }
    h2 {
      font-weight: bold;
      font-size: 40px;
    }
    > div {
      margin: 8px 0;
    }
  }
  
`;

const Fab = styled(_Fab)`
  && {
    background-color: #ffd800;
    &:hover {
      background-color: #cc9e4c;  
    }
    &[disabled] {
      z-index: -10;
    }
  }
`;

const Image = styled.img`
  
`;



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #004225;
  background-image: url(${bgImage});
`;


const MobileStepper = styled(_MobileStepper)`
  && {
    background-color: transparent;
    > div > div {
      background-color: #ffd800
    }
  }
`;

const OwnerCreateProduct = ({ values, handleSubmit, handleChange }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: 'Dados do Produto',
      content: (
        <FormWrapper>
          <div>
            <h1> Adicionando produto </h1>
            <h2> O que você quer vender ? </h2>
            <Image src={w1}/>
          </div>
          <div>
            <TextField variant={'outlined'} fullWidth={true} label={'Nome do Produto'} name={'name'} onChange={handleChange} value={values.name}/>
          </div>
        </FormWrapper>
      )
    },
    {
      label: 'Valor',
      content: (
        <FormWrapper>
          <div>
            <h1> Adicionando produto </h1>
            <h2> Como você vai cobrar ? </h2>
            <Image src={w2}/>
          </div>
          <div>
            <TextField name={'price'} onChange={handleChange} value={values.price} variant={'outlined'} fullWidth={true} label={'Valor por Kilo'} placeholder={'R$ 10'}/>
          </div>
        </FormWrapper>
      )
    },
    {
      label: 'Intervalo',
      content: (
        <FormWrapper>
          <div>
            <h1> Adicionando Produto </h1>
            <h2> Qual o intervalo entre cada colheita? </h2>
            <Image src={w3} style={{ height: 250 }}/>
          </div>
          <div>
            <TextField name={'interval'} onChange={handleChange} value={values.interval} variant={'outlined'} fullWidth={true} label={'Intervalo'} placeholder={'1 Semana '}/>
          </div>
        </FormWrapper>
      )
    },
    {
      label: 'Volume',
      content: (
        <FormWrapper>
          <div>
            <h1> Adicionando Produto </h1>
            <h2> Qual o volume colhido em cada produção? </h2>
            <Image src={w3} style={{ height: 250 }}/>
          </div>
          <div>
            <TextField name={'quantity'} onChange={handleChange} value={values.quantity} variant={'outlined'} fullWidth={true} label={'Volume'} placeholder={'30 Kilos'}/>
          </div>
        </FormWrapper>
      )
    }
  ];

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const getStepContent = (step) => steps[step].content;

  return (
    <Layout>
      <Wrapper>
        { getStepContent(activeStep) }

        <MobileStepper
          variant="progress"
          steps={steps.length}
          activeStep={activeStep}
          position="static"
          nextButton={
            <Fab onClick={ activeStep + 1 === steps.length ? handleSubmit : handleNext}>
              <KeyboardArrowRight />
            </Fab>
          }
          backButton={
            <Fab onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
            </Fab>
          }
        />
      </Wrapper>
    </Layout>
  )

};

export default withSnackbar(
  withFormik({
    mapPropsToValues: () => ({
      name: '',
      price: '',
      quantity: '',
      interval: ''
    }),
    handleSubmit: (values, formikBag) => {

        const { setSubmitting, props } = formikBag;
        const { name, price, quantity } = values;

        const input = {
          name,  price, quantity
        };

        const onError = () => {
          props.showSnackbar({ message: 'Ocorreu um erro ao realizar a operação' });
          setSubmitting(false);
        };

        const onCompleted = ({ AuthorAdd: { error }}) => {
          if (error) return props.showSnackbar({ message: error });
          props.showSnackbar({ message: 'Pesquisador criado com sucesso' });
          setSubmitting(false);
          props.history.push(`/product/list`);
        };

        CreateProductMutation.commit(input, onCompleted, onError);
      }
  })(OwnerCreateProduct)
);




