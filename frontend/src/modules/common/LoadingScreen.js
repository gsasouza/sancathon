import * as React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/background-padrao.png';
import logo from '../../assets/logomarca.png';
import _CircularProgress from '@material-ui/core/es/CircularProgress/CircularProgress';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const CircularProgress = styled(_CircularProgress)`
  && {
    height: 150px !important;
    width: 150px !important;
  }  

`;

const Wrapper = styled(Column)`
  justify-content: center;
  height: 100%;
  padding: 0 15px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;
`;

const Image = styled.img`
  height: 150px;
  width: auto;
  align-self: center;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Image src={logo} alt={'Sobera'}/>
      <Column>
        <CircularProgress color={'secondary'} />
      </Column>
    </Wrapper>
  )
};

export default Loading
