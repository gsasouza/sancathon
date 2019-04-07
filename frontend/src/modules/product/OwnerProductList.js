import * as  React from 'react';
import _ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import Layout from '../Layout';

import Button from '../common/Button';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {createQueryRenderer} from '../../relay/createQueryRender';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 48px 15px;
`;

const ExpansionPanel = styled(_ExpansionPanel)`
  && {
    border-radius: 30px;
    margin: 2px 0;
    &:last-child {
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    &:before {
      height: 0;
    }
  }
`;

const Item = ({ name, price, quantity }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{name}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        Preço: R${price}
        Quantidade: {quantity}
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

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

