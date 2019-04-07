import * as  React from 'react';
import _ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

import Button from '../common/Button';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
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

const productsMock = {
  edges: [
    {
      cursor: 1,
      node: {
        name: 'Batata',
        quantity: 10,
        price: '2,00',
      }
    },
    {
      cursor: 1,
      node: {
        name: 'Tomate',
        quantity: 15,
        price: '3,00',
      }
    },
    {
      cursor: 1,
      node: {
        name: 'Cebola',
        quantity: 11,
        price: '1,00',
      }
    },
    {
      cursor: 1,
      node: {
        name: 'Alface',
        quantity: 14,
        price: '1,40',
      }
    },
    {
      cursor: 1,
      node: {
        name: 'Laranja',
        quantity: 25,
        price: '3,50',
      }
    },
  ]
};

const Item = ({ name, price, quantity }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{name}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        Preço: R${price}
        Quantidade: R${quantity}
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const OwnerProductList = () => {
  return (
    <Wrapper>
      <Button style={{ margin: '15px 0'}} variant="contained" color="primary" width={200} onClick={() => console.log('Adicionar Produto')}>
        Adicionar Produto
      </Button>
      {productsMock.edges.map(({ node }, index) => <Item key={index} {...node} />)}
    </Wrapper>
  )
};

export default OwnerProductList;
