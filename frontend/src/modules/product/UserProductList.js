import * as  React from 'react';
import _Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import _CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components';

import image from '../../assets/1.jpg';
import Layout from '../Layout';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

const Card = styled(_Card)`
  margin: 10px 0;
`;

const CardMedia = styled(_CardMedia)`
  width: 100%;
  height: 350px;
`;

const PriceWrapper = styled(CardContent)`
  width: 100%;
`;

const productsMock = {
  edges: [
    {
      cursor: 1,
      node: {
        name: 'Batata',
        quantity: 10,
        description: 'Lorem Ipsum is simply dummy',
        price: '2,00',
      }
    },
    {
      cursor: 1,
      node: {
        name: 'Tomate',
        quantity: 15,
        price: '3,00',
        description: 'Lorem Ipsum is simply dummy',
      }
    },
    {
      cursor: 1,
      node: {
        name: 'Cebola',
        quantity: 11,
        price: '1,00',
        description: 'Lorem Ipsum is simply dummy',
      }
    },
    {
      cursor: 1,
      node: {
        name: 'Alface',
        quantity: 14,
        price: '1,40',
        description: 'Lorem Ipsum is simply dummy',
      }
    },
    {
      cursor: 1,
      node: {
        name: 'Laranja',
        quantity: 25,
        price: '3,50',
        description: 'Lorem Ipsum is simply dummy',
      }
    },
  ]
};

const meMock = {
  name: 'Gabriel Souza',
};

const HeartIcon = styled(FavoriteIcon)`
  color: ${props => props.hasLiked ? '#ff3d3d' : 'rgba(0, 0, 0, 0.54)'};
  transition: color 1s cubic-bezier(.17,.67,.83,.67);
`;

const Item = ({ name, price, description }) => {
  const [hasLiked, setHasLiked] = React.useState();

  return (
    <Card>
      <CardHeader
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={description}
      />
      <CardMedia
        image={image}
        title={'Produto'}
      />
      <CardActions disableActionSpacing>
        <PriceWrapper>
            <Typography variant={'h6'}>
            {`A partir de R$ ${price}`}
          </Typography>
        </PriceWrapper>
        <IconButton aria-label="Gostei" onClick={() => setHasLiked(!hasLiked)} >
          <HeartIcon hasLiked={hasLiked}/>
        </IconButton>
        <IconButton aria-label="Comprar">
          <ShoppingBasketIcon />
        </IconButton>

      </CardActions>
    </Card>
  );
};

const UserProductList = () => {
  return (
    <Layout>
      <Wrapper>
        {productsMock.edges.map(({ node }, index) => <Item key={index} {...node} me={meMock} />)}
      </Wrapper>
    </Layout>
  )
};

export default UserProductList;
