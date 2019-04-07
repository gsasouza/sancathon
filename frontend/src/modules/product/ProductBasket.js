import * as  React from 'react';
import _Card from '@material-ui/core/Card';
import _CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import ScreenTitle from '../common/ScreenTitle';
import Layout from '../Layout';
import {createQueryRenderer} from '../../relay/createQueryRender';
import backgroundImage from '../../assets/fundo-telas-reduzido-semfundo.png';
import banana from '../../assets/img1.jpg';
import orange from '../../assets/img2.jpg';
import apple from '../../assets/img3.jpeg';
import _ShoppingBasketIcon from '../common/RemoveBasketIcon';

import Button from '../common/Button';

const AvatarWrapper = styled.div`
  display: flex;
  justify-content : space-around;
  align-items: center;
  > div:first-child  {
    width: 60px;
    height: 60px;
    border: 4px solid #fff;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 14px;
    font-weight: bold;
  }
  svg {
    color: red;
  }
`;

const HeartIcon = styled(FavoriteIcon)`
  color: ${props => props.hasLiked ? '#ffd800' : 'rgba(0, 0, 0, 0.54)'};
  transition: color 1s cubic-bezier(.17,.67,.83,.67);
  ${props => props.large && `
    && {
      width:50px;
      height:50px;
    }`
  }
`;

const UserProfile = ({ me, hasLiked, name }) => {
  return (
    <AvatarWrapper>
      <Avatar src={`https://randomuser.me/api/portraits/med/men/30.jpg`}/>
      <div>
        <Typography component="h1" style={{ fontSize: 22, fontWeight: 'bold' }}>
          {name}
        </Typography>
        <div style={{ display: 'flex'}}>
          <HeartIcon hasLiked={hasLiked}/>
          <span>{`Família ${me ? me.name.split(' ')[1] : 'Produtopper'} (100 apoios)`}</span>
        </div>
      </div>
    </AvatarWrapper>
  )
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Top = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 15px;
  justify-content: space-between;
`;

const Test = styled.section`
  display: flex;
  justify-content : space-between;
  margin: 10px 15px; 
`;

const ShoppingBasketIcon = styled(_ShoppingBasketIcon)`
  && {
    fill: red;
  }
  ${props => props.large && `
    && {
      width:50px;
      height:50px;
      fill: red;
    }`
  }

`;

const Card = styled(_Card)`
  && {
    margin: 10px 0;
    border-radius: 30px;
  }  
`;

const CardMedia = styled(_CardMedia)`
  width: 100%;
  height: 150px;
`;

const PriceWrapper = styled(CardContent)`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  background-image: url(${backgroundImage});  
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  height: 100%;
  > div > h6 {
    color: #fff;
  }
`;

const Imgs = {
  Banana: banana,
  Maça: apple,
  Laranja: orange,
};

const Tag = ({name}) => {
  return (
    <Chip label={name}/>
  )
};

const tags = ["Fazer Frito", "Em pedacos", "Adstringente"];

const Item = ({ id, name, price, quantity, createdby, products, setProducts }) => {
  return (
    <Card>
      <Top>
        <UserProfile me={createdby} name={name} />
      </Top>

      <CardMedia
        image={Imgs[name]}
        title={'Produto'}
      />
      <Test>
        {tags.map(tag => <Tag name={tag}/>)}
      </Test>

      <CardActions disableActionSpacing>
        <PriceWrapper>
          <Typography variant={'h4'}>
            {`R$ ${price * quantity},00`}
          </Typography>
        </PriceWrapper>
        <IconButton aria-label="Remover" onClick={() => setProducts(products.filter(item => item.id !== id ))}>
          <ShoppingBasketIcon large />
        </IconButton>

      </CardActions>
    </Card>
  );
};

const Column = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
  button {
    margin-top: 10px;
    align-self: center !important;
  }
`;

const UserProductList = () => {
  const [products, setProducts] = React.useState([{
    createdby: {name: "Produtor Souza"},
    id: "UHJvZHVjdDo1Y2FhMDJhNDE0M2E4MTAwM2EzOTE3ZmU=",
    name: "Banana",
    price: "3",
    quantity: "2",
  }]);
  return (
    <Layout>
      <HeaderWrapper>
        <ScreenTitle> Minha Cesta de Compras </ScreenTitle>
        <Wrapper>
          {!products.length && <Typography variant={'h5'} style={{ color: '#fff', marginTop: 40 }}> Cesta Vazia :( </Typography>}
          {products.map((item, index) => <Item key={index} {...item} products={products} setProducts={setProducts} />)}
          {products.length && (
            <Column>
              <span> Sua cesta custa: </span>
              <span> R$ 6,00 </span>
              <Button variant={'contained'} color={'primary'}>
                Receber Cesta
              </Button>
            </Column>
          )}
        </Wrapper>
      </HeaderWrapper>
    </Layout>
  )
};

const fragment = createFragmentContainer(UserProductList, {
  query: graphql`
      fragment UserProductList_query on Query {
          products {
              edges {
                  node {
                      id
                      name
                      price
                      quantity
                      createdby {
                          name
                      }
                  }
              }
          }
      }
  `,
});

export default createQueryRenderer(fragment, {
  query: graphql`
      query UserProductListQuery {
          ...UserProductList_query
      }
  `,
});
