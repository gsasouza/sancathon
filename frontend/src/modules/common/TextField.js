import styled from 'styled-components';
import _TextField from '@material-ui/core/TextField/TextField';

export default styled(_TextField)`
  fieldset {
    border-radius: 30px; 
    background-color: #bebbb8;
    border-width: 0 !important;
  }
  label[data-shrink=true] { 
    display: none;
  }
  
  input {
    z-index: 0;
  }
`;
