import * as  React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import _Card from '@material-ui/core/Card';
import _CardMedia from '@material-ui/core/CardMedia';

import Layout from '../Layout';
import Button from '../common/Button';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {createQueryRenderer} from '../../relay/createQueryRender';
import banana from '../../assets/img1.jpg';
import apple from '../../assets/img3.jpeg';
import orange from '../../assets/img2.jpg';
import CardContent from '@material-ui/core/es/CardContent/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 48px 15px;
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

const Imgs = {
  Banana: banana,
  Maça: apple,
  Laranja: orange,
};

const HeartIcon = styled(FavoriteIcon)`
  color: red;
  transition: color 1s cubic-bezier(.17,.67,.83,.67);
  && {
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }
`;

const Item = ({ name, price }) => {

  return (
    <Card>
      <CardMedia
        image={Imgs[name]}
        title={'Produto'}
      />
      <CardContent>
        <div>
          <Typography component="h1" style={{ fontSize: 22, fontWeight: 'bold' }}>
            {name}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <HeartIcon />
            <span>{`Esse item tem 100 apoios`}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 5}}>
            <span style={{ fontSize: 26, fontWeight: 'bold'}}> R$ {price},00/kg</span>
            <Button variant="contained" color="primary">
              Editar
            </Button>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};
const OwnerProductList = ({ history, query }) => {
  const { products } = query;
  return (
    <Layout>
      <Wrapper>
        <Button style={{ margin: '15px 0'}} variant="contained" color="primary" width={'200px'} onClick={() => history.push('/product/new')}>
          Adicionar Produto
        </Button>
        {products.edges.map(({ node }) => <Item key={node.id} {...node} />)}
      </Wrapper>
    </Layout>
  )
};

const fragment = createFragmentContainer(OwnerProductList, {
  query: graphql`
      fragment OwnerProductList_query on Query {
          products (isOwner: true) {
              edges {
                  node {
                      id
                      name
                      price
                      quantity
                  }
              }
          }
      }
  `,
});

export default createQueryRenderer(fragment, {
  query: graphql`
      query OwnerProductListQuery {
          ...OwnerProductList_query
      }
  `,
});

