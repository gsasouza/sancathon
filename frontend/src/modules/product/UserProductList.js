import * as  React from 'react';
import _Card from '@material-ui/core/Card';
import _CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DialogTitle from '@material-ui/core/DialogTitle';
import _Dialog from '@material-ui/core/Dialog';
import _ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import ScreenTitle from '../common/ScreenTitle';
import Layout from '../Layout';
import TextField from '../common/TextField';
import {createQueryRenderer} from '../../relay/createQueryRender';
import backgroundImage from '../../assets/fundo-telas-reduzido-semfundo.png';
import banana from '../../assets/img1.jpg';
import orange from '../../assets/img2.jpg';
import apple from '../../assets/img3.jpeg';
import useSnackbar from '../snackbar/useSnackbar';


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
    color: #3baf07;
  }
  ${props => props.large && `
    && {
      width:50px;
      height:50px;
      color: #3baf07;
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
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
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

const Dialog = styled(_Dialog)`
  && {
    > div >  div {
      border-radius: 20px;
    }
    h2, p {
      text-align: center;
    }
  }
`;

const Row = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
`;

const PriceTextWrapper = styled.span`
  font-size: 22px;
`;

const tags = ["Fazer Frito", "Em pedacos", "Adstringente"];

const Item = ({ name, price, description, createdby }) => {
  const [hasLiked, setHasLiked] = React.useState();
  const [isOpen, handleOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);
  const { showSnackbar } = useSnackbar();


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
            {`R$ ${price}/kg`}
          </Typography>
        </PriceWrapper>
        <IconButton aria-label="Gostei">
          <HeartIcon large />
        </IconButton>
        <IconButton aria-label="Comprar" onClick={handleOpen}>
          <ShoppingBasketIcon large />
        </IconButton>
        <Dialog onClose={() => handleOpen(false)} open={isOpen}>
          <DialogTitle>{name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Quanto você quer ?
            </DialogContentText>
            <TextField
              autoFocus
              label="Quantidade em Kilos"
              fullWidth
              type={'number'}
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
            <Row>
              <PriceTextWrapper>
                {`R$ ${price * quantity},00`}
              </PriceTextWrapper>
              <IconButton aria-label="Comprar" onClick={() => {
                handleOpen(false);
                return showSnackbar({ type: 'success', message: 'Pedido enviado com sucesso!'});
              }}>
                <ShoppingBasketIcon />
              </IconButton>
            </Row>
          </DialogContent>
        </Dialog>

      </CardActions>
    </Card>
  );
};

const UserProductList = ({ query }) => {
  const { products } = query;
  return (
    <Layout>
      <HeaderWrapper>
        <ScreenTitle> Comprar Organicos </ScreenTitle>
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
