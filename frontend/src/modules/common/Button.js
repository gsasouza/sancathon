import styled from 'styled-components';
import _Button from '@material-ui/core/Button/Button';

const Button = styled(_Button)`
  && {
    align-self: flex-end;
    width: ${props => props.width || 'auto'};
    border-radius: 50px;
  }
`;

export default Button;
