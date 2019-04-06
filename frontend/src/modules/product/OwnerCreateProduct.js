import * as React from 'react';
import _Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import styled from 'styled-components';

import Button from '../common/Button';

const steps = [
  {
    label: 'Dados do Produto',
    content: <div>DADOS</div>
  },
  {
    label: 'Estoque',
    content: <div> ESTOQUE</div>
  },
  {
    label: 'Adicionais',
    content: <div> ADICIONAIS </div>
  }
];

const Stepper = styled(_Stepper)`
  && {
    background-color: transparent;
  }
`;

const ButtonWrapper = styled.div`
  margin: 0 10px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const OwnerCreateProduct = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);

  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const getStepContent = (step) => steps.values()[step];

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map(({ content, label}, index) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
          <StepContent>
            { getStepContent(index) }
            <ButtonsWrapper>
              <ButtonWrapper>
                <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                color="secondary"
              >
                Voltar
              </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Avançar'}
                </Button>
              </ButtonWrapper>
            </ButtonsWrapper>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  )
};

export default OwnerCreateProduct;
