import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import _Card from '@material-ui/core/Card';
import _CardHeader from '@material-ui/core/CardHeader';
import _CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import _CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import _StarIcon from '@material-ui/icons/Star';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import _Fab from '@material-ui/core/Fab';

import Layout from '../Layout';
import backgroundImage from '../../assets/fundo-telas-reduzido-semfundo.png';
import Button from '../common/Button';
import { logout } from '../security/security';

const meMock = {
  image: 'https://avatars2.githubusercontent.com/u/8701003?s=400&u=79bddb72021b7bc43618419c48d77a49ec036b2c&v=4',
  name: 'Gabriel Souza'
};

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


const CardActions = styled(_CardActions)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
  }
  button:last-child {
    margin-bottom: 10px;
  }
  

`;

const StarIcon = styled(_StarIcon)`
  color: #ffd800;
`;

const Card = styled(_Card)`
  && {
    margin: 10px 0;
    border-radius: 30px;
    width: 90%;
  }  
`;

const CardMedia = styled(_CardMedia)`
  width: 100%;
  height: 150px;
`;

const CardHeader = styled(_CardHeader)`
  && {
    padding: 8px 16px;
    span {
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

const ContentWrapper = styled(CardContent)`
  && {
    padding: 10px;
    &:last-child {
      padding-bottom: 10px;
    }
  }
`;

const HeartIcon = styled(FavoriteIcon)`
  color: ${props => props.hasLiked ? '#ff3d3d' : 'rgba(0, 0, 0, 0.54)'};
  transition: color 1s cubic-bezier(.17,.67,.83,.67);
`;

const Wrapper = styled.div`
  background-image: url(${backgroundImage});  
  padding: 10px 0;
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
      <Avatar alt={me.name} src={me.image}/>
      <span>{me.name}</span>
    </AvatarWrapper>
  )
};

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const UserHome = ({ history }) => {
  const familyMock = {
    image: 'https://images.unsplash.com/photo-1509506489701-dfe23b067808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1068&q=80',
  };

  const actions = [
    {
      label: 'Compras',
      icon: <ShoppingBasketIcon />,
      onClick: () => history.push('/product/list')
    },
    {
      label: 'Famílias',
      icon: <GroupIcon/>
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

  const [hasLiked, setHasLiked] = React.useState();

  return (
    <Layout>
      <Wrapper>
        <UserProfile me={meMock}/>
        <Card>
          <CardHeader
            avatar={<StarIcon/>}
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={'Família do Mês'}
          />
          <CardMedia
            image={familyMock.image}
            title={'Família'}
          />
          <ContentWrapper>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </ContentWrapper>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Gostei" onClick={() => setHasLiked(!hasLiked)} >
              <HeartIcon hasLiked={hasLiked}/>
            </IconButton>
            <Button variant={'contained'} color={'primary'}>
              Conhecer
              <PlayArrowIcon/>
            </Button>
          </CardActions>
        </Card>
        <IconWrapper>
          {actions.map((action, index) => <ActionButton key={index} {...action}/>)}
        </IconWrapper>
      </Wrapper>
    </Layout>
  );
};

export default UserHome;
