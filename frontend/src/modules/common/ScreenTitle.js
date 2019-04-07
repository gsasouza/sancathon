import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
`;

const ScreenTitle = () => {
  return (
    <Wrapper>
      <Typography align={'left'} variant={'h6'}> Cadastrar Produto </Typography>
    </Wrapper>
  )
};

export default ScreenTitle;
