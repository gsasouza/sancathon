import styled from 'styled-components';
import _Button from '@material-ui/core/Button/Button';

const Button = styled(_Button)`
  && {
    margin: 0 0 15px 0;
    align-self: flex-end;
    width: ${props => `${props.width}px` || 'auto'};
    border-radius: 50px;
  }
`;

export default Button;
