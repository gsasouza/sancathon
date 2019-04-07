import * as React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/background-padrao.png';
import logo from '../../assets/logomarca.png';
import Typography from '@material-ui/core/es/Typography/Typography';

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

const NotFound = () => {
  return (
    <Wrapper>
      <Image src={logo} alt={'Sobera'}/>
      <Column>
        <Typography variant={'h4'} style={{textAlign: 'center', color: '#fff' }}>
          Nenhuma página foi encontrada :(
        </Typography>
      </Column>
    </Wrapper>
  )
};

export default NotFound
