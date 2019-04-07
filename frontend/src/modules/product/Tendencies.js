import * as React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import image from '../../assets/background-padrao.png'
import banana from '../../assets/img1.jpg'
import orange from '../../assets/img2.jpg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import _CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Paper from '@material-ui/core/Paper';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content : center;
  height : 100%;
  background-image: url(${image});
  margin: 50px 15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  > div {
    display: flex;
    width : 340px;
    margin : 2px;
    align-self : center;
  }
`;

const CardMedia = styled(_CardMedia)`
  width: 230px;
  height : 115px;
`;

const TendenciesInnerForm = () => {
  return (

    <Wrapper>

      <Paper>
        <Typography variant="h5" component="h3">
          Essa Semana
        </Typography>
      </Paper>

     <Card>
      <CardMedia
        image={banana}
        title="Live from space album cover"
      />
      <div>
        <CardContent>
          <Typography component="h5" variant="h5">
            Banana
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <ArrowUpward/>
          </Typography>
        </CardContent>
      </div>

    </Card>

    <Card>
      <CardMedia
        image={orange}
        title="Live from space album cover"
      />
      <div>
        <CardContent>
          <Typography component="h5" variant="h5">
            Laranja
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <ArrowDownward/>
          </Typography>
        </CardContent>
      </div>
    </Card>

     <Paper>
        <Typography variant="h5" component="h3" align="center">
          Proxima Semana
        </Typography>
      </Paper>

      <Card>
        <CardMedia
          image={orange}
          title="Live from space album cover"
        />
        <div>
          <CardContent>
            <Typography component="h5" variant="h5">
              Laranja
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <ArrowUpward/>
            </Typography>
          </CardContent>
        </div>
      </Card>

    </Wrapper>
  )
};

export default withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  handleSubmit: () => console.log('here')
})(TendenciesInnerForm);
