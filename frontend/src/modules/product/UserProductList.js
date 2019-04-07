import * as  React from 'react';
import _Card from '@material-ui/core/Card';
import _CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import _ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

import ScreenTitle from '../common/ScreenTitle';
import image from '../../assets/1.jpg';
import Layout from '../Layout';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {createQueryRenderer} from '../../relay/createQueryRender';
import backgroundImage from '../../assets/fundo-telas-reduzido-semfundo.png';
import banana from '../../assets/img1.jpg';
import orange from '../../assets/img2.jpg';
import apple from '../../assets/img3.jpeg';

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
      <Avatar src={`https://randomuser.me/api/portraits/med/men/${Math.round(Math.random() * 65)}.jpg`}/>
      <div>
        <Typography component="h1" style={{ fontSize: 22, fontWeight: 'bold' }}>
          {name}
        </Typography>
        <div style={{ display: 'flex'}}>
          <HeartIcon hasLiked={hasLiked}/>
          <span>{`Família ${me ? me.name.split(' ')[1] : 'Produtopper'} (${Math.round(Math.random() * 200)} apois)`}</span>
        </div>
      </div>
    </AvatarWrapper>
  )
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
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
    width:50px;
    height:50px;
    color: #3baf07;
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
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div > h6 {
    color: #fff;
  }
`;


const Tag = ({name}) => {
  return (
    <Chip label={name}/>
  )
};

const tags = ["Fazer Frito", "Em pedacos", "Adstringente"];
const imgs = [apple, orange, banana];

const Item = ({ name, price, description, createdby }) => {
  const [hasLiked, setHasLiked] = React.useState();

  return (
    <Card>
      <Top>
        <UserProfile me={createdby} name={name} />
      </Top>

      <CardMedia
        image={apple}
        title={'Produto'}
      />
      <Test>
       {tags.map(tag => <Tag name={tag}/>)}
      </Test>

      <CardActions disableActionSpacing>
        <PriceWrapper>
          <Typography variant={'h4'}>
            {`R$ ${price}/kg`}
          </Typography>
        </PriceWrapper>
        <IconButton aria-label="Gostei">
          <HeartIcon large />
        </IconButton>
        <IconButton aria-label="Comprar" onClick={this.handleOpen}>
          <ShoppingBasketIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const UserProductList = ({ query }) => {
  const { products } = query;
  return (
    <Layout>
      <HeaderWrapper>
        <ScreenTitle t>Comprar Organicos </ScreenTitle>
        <Wrapper>
          {products.edges.map(({ node }, index) => <Item key={index} {...node} />)}
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
