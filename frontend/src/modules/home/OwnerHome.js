import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import _Card from '@material-ui/core/Card';
import _CardHeader from '@material-ui/core/CardHeader';
import _Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import _Fab from '@material-ui/core/Fab';

import Layout from '../Layout';
import backgroundImage from '../../assets/fundo-telas-reduzido-semfundo.png';
import Button from '../common/Button';
import { logout } from '../security/security';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {createQueryRenderer} from '../../relay/createQueryRender';

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > div:first-child  {
    width: 80px;
    height: 80px;
    border: 4px solid #fff;
  }
  span {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
`;

const ActionWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;   
  width: 150px;
  margin: 5px 0;
  > div:first-child  {
    width: 100px;
    height: 100px; 
  }
  span {
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;
    color: #bebbb8;
  }
`;

const Card = styled(_Card)`
  && {
    margin: 10px 0;
    border-radius: 10px;
    width: 90%;
    overflow: visible;
    button {
      font-size: 22px;
      border-radius: 10px;
      padding: 20px 0;
    }
  }  
`;

const CardHeader = styled(_CardHeader)`
  && {
    padding: 16px;
    span {
      font-weight: bold;
      font-size: 24px;
    }
  }
`;



const Wrapper = styled.div`
  background-image: url(${backgroundImage});  
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Fab = styled(_Fab)`
  && {
    width: 80px;
    height: 80px;
    svg {
      color: #fff;
      font-size: 40px;
    }
  }  
`;

const Badge = styled(_Badge)`
  && {
    width: 100%;
    span {
      width: 35px;
      height: 35px;
      border-radius: 30px;
      font-size: 20px;
      font-weight: bold;
    }

  }
`;
const ActionButton = ({ icon, label, onClick }) => (
  <ActionWrapper>
    <Fab color={'primary'} onClick={onClick}>
      {icon}
    </Fab>
    <span>{label}</span>
  </ActionWrapper>
);

const UserProfile = ({ me }) => {
  return (
    <AvatarWrapper>
      <Avatar alt={me.name} src={`https://randomuser.me/api/portraits/med/men/${Math.round(Math.random() * 65)}.jpg`}/>
      <span>{`Família ${me.name.split(' ')[1] || 'Produtopper'}`}</span>
    </AvatarWrapper>
  )
};

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const OwnerHome = ({ history, query }) => {

  const { me } = query;

  const actions = [
    {
      label: 'Produtos',
      icon: <ShoppingBasketIcon />,
      onClick: () => history.push('/product/list')
    },
    {
      label: 'Tendências',
      icon: <ShowChartIcon/>,
      onClick: () => history.push('/product/tendencies')
    },
    {
      label: 'Configurações',
      icon: <SettingsIcon/>
    },
    {
      label: 'Sair',
      icon: <ExitToAppIcon/>,
      onClick: () => {
        logout();
        history.push('/login')
      }
    },
  ];

  return (
    <Layout>
      <Wrapper>
        <UserProfile me={me}/>
        <Card>
          <CardHeader
            title={'Olá João, tudo bem?'}
          />
          <Badge badgeContent={Math.round(Math.random() * 10)} color={'secondary'}>
            <Button variant={'contained'} color={'primary'} width={'100%'}>
              Meus Pedidos
            </Button>
          </Badge>
        </Card>
        <IconWrapper>
          {actions.map((action, index) => <ActionButton key={index} {...action}/>)}
        </IconWrapper>
      </Wrapper>
    </Layout>
  );
};

const fragment = createFragmentContainer(OwnerHome, {
  query: graphql`
      fragment OwnerHome_query on Query {
          me {
              name
          }
      }
  `,
});

export default createQueryRenderer(fragment, {
  query: graphql`
      query OwnerHomeQuery {
          ...OwnerHome_query
      }
  `,
});
