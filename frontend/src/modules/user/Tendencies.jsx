import * as React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import _Button from '../common/Button.js'
import image from '../../assets/background-padrao.png'
import banana from '../../assets/img1.jpg'
import orange from '../../assets/img2.jpg'
import _Card from '@material-ui/core/Card';
import _CardContent from '@material-ui/core/CardContent';
import _CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Paper from '@material-ui/core/Paper';
import backgroundImage from '../../assets/fundo-telas-reduzido-semfundo.png';
import grafic from '../../assets/grafico.png';

const HeaderWrapper = styled.div`
  background-image: url(${backgroundImage});
  padding: 10px 0;
  padding-bot : 1px;
  font-size : 25px;
  font-weight : bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  > div > h6 {
    color: #fff;
  }
`;



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight : bold;
  font-size : 25px;
  justify-content : center;
  background-color : '0xfff'
  > div {
    display: flex;
    width : 100px;
    margin : 2px;
    align-self : center;
  }
`;


const Card = styled(_Card)`
&& {
  box-shadow : dark;
  display : flex;
  border-radius : 10px;
  margin : 5px;
  shadow : 20px;
  height : 75px;
  width : 80%;
  }
`;

const CardHeader = styled(_Card)`
&& {
  display : flex;
  border-radius : 10px;
  margin : 5px;
  height : 300px;
  width : 80%;
  }
`;

const CardMedia = styled(_CardMedia)`
  align-self : flex-start;
  width: 100px;
  height : 100%;
`;

const CardMediaHeader = styled(_CardMedia)`
  align-self : center;
  width: 100px;
  height : 100%;
`;

const Button = styled(_Button)`
&& {
  border-radius : 10px;
  width : 5px;
}
`;

const CardContent = styled(_CardContent)`
&& {
    align-self : right;
    justify-content : center;
    font-weight : bold;
  }
`;

const CardContentHeader = styled(_CardContent)`
&& {
    align-self : center;
    justify-content : center;
    font-weight : bold;
  }
`;

const TendenciesInnerForm = () => {
  return (
    <HeaderWrapper>
      <div color="0xfff">
        Tendencias
      </div>

      <CardHeader>

      <div>
        <CardContentHeader>
          <Typography component="h5" variant="h5">
            SoberaGrafico
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Conheca a demanda
          </Typography>
        </CardContentHeader>
        <CardMediaHeader
          image={grafic}
        />
      </div>



     </CardHeader>


      <Wrapper>
        <div variant="h3" align="center">
          Ultima Semana
        </div>

       <Card>
        <CardMedia
          image={banana}
        />
        <div>
          <CardContent>
            <Typography component="h5" variant="h5">
              Banana  18%
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            <Button variant="contained" color="primary" >
              <ArrowUpward/>
            </Button>
            </Typography>
          </CardContent>
        </div>
      </Card>

      <Card>
        <CardMedia
          image={orange}
        />
        <div>
          <CardContent>
            <Typography component="h5" variant="h5">
              Laranja  4%
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            <Button variant="contained" color="primary" >
              <ArrowUpward/>
            </Button>
            </Typography>
          </CardContent>
        </div>
      </Card>


      <div variant="h3" align="center">
          Essa Semana
      </div>

        <Card>
          <CardMedia
            image={orange}
          />
          <div>
            <CardContent>
              <Typography component="h5" variant="h5">
                Laranja
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
              <Button variant="contained" color="primary" >
                <ArrowUpward/>
              </Button>
              </Typography>
            </CardContent>
          </div>
        </Card>

      </Wrapper>
    </HeaderWrapper>
  )
};

export default withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  handleSubmit: () => console.log('here')
})(TendenciesInnerForm);
