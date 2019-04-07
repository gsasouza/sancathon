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
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import _CardActions from '@material-ui/core/CardActions/CardActions';

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

const familyMock = {
  image: 'https://images.unsplash.com/photo-1509506489701-dfe23b067808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1068&q=80',
};

const ContentWrapper = styled(CardContent)`
  && {
    padding: 10px;
    &:last-child {
      padding-bottom: 0px;
    }
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


const Item = ({ name }) => {
  const [hasLiked, setHasLiked] = React.useState();
  return (
    <Card>
      <ContentWrapper>
        <Typography component="h1" style={{ fontSize: 22, fontWeight: 'bold' }}>
          {`Família ${name.split(' ')[1] || 'Produtopper'}`}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <HeartIcon />
          <span>{`Esse item tem 106 apoios`}</span>
        </div>
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
      </ContentWrapper>
    </Card>
  );
};
const OwnerList = ({ history, query }) => {
  const { users } = query;
  return (
    <Layout>
      <Wrapper>
        {users.edges.filter(({ node }) => node.isOwner).map(({ node }) => <Item key={node.id} {...node} />)}
      </Wrapper>
    </Layout>
  )
};

const fragment = createFragmentContainer(OwnerList, {
  query: graphql`
      fragment OwnerList_query on Query {
          users (first: 1000) {
              edges {
                  node {
                      id
                      name
                  }
              }
          }
      }
  `,
});

export default createQueryRenderer(fragment, {
  query: graphql`
      query OwnerListQuery {
          ...OwnerList_query
      }
  `,
});

