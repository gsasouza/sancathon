import * as  React from 'react';
import _Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import _CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import _ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

import image from '../../assets/1.jpg';
import Layout from '../Layout';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {createQueryRenderer} from '../../relay/createQueryRender';
import backgroundImage from '../../assets/fundo-telas-reduzido-semfundo.png';

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content : space-around;

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

const HeartIcon = styled(FavoriteIcon)`
  color: ${props => props.hasLiked ? '#ffd800' : 'rgba(0, 0, 0, 0.54)'};
  transition: color 1s cubic-bezier(.17,.67,.83,.67);

`;

const UserProfile = ({ me, hasLiked }) => {
  return (
    <AvatarWrapper>
      <Avatar src={`https://randomuser.me/api/portraits/med/men/${Math.round(Math.random() * 65)}.jpg`}/>
      <HeartIcon hasLiked={hasLiked}/>
      <span>{me ? me.name : '---' }</span>
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
`;


const Tag = ({name}) => {
  return (
    <Paper>
      <Typography component="h6">
        {name}
      </Typography>
    </Paper>
  )
};

const tags = ["Fazer Frito", "Em pedacos", "Adstringente"];

const Item = ({ name, price, description, createdby }) => {
  const [hasLiked, setHasLiked] = React.useState();

  return (
    <Card>
      <Top>
      <UserProfile me={createdby} />
      <CardHeader
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={description}
      />
      </Top>

      <CardMedia
        image={image}
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
        <IconButton aria-label="Gostei" onClick={() => setHasLiked(!hasLiked)} >
        </IconButton>
        <HeartIcon/>
        <IconButton aria-label="Comprar">
          <ShoppingBasketIcon/>
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
