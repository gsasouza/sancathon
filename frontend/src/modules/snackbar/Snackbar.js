import _IconButton from '@material-ui/core/IconButton';
import _Snackbar from '@material-ui/core/Snackbar';
import _SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import styled from 'styled-components';

import SnackbarContext from './SnackbarContext';

const Message = styled.span`
  color: #fff;
`;

const variantIcon = {
  success: <CheckCircleIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
};

const backgroundColors = {
  success: green[600],
  error: '#d32f2f',
  info: '#1976d2',
  warning: amber[700],
};

const SnackbarContent = styled(_SnackbarContent)`
  background-color: ${props => backgroundColors[props.type] || '#000'} !important;
`;

const IconButton = styled(_IconButton)`
  && {
    color: #fff;
  }
`;

const MessageWrapper = styled.span`
  display: flex;
  align-items: center;
  span:first-child {
    margin: 0 5px;
  }

`;

const Action = ({ handleClose }) => {
  return (
    <IconButton key='close' aria-label='Close' color='primary' onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  );
};

const Content = ({
  handleClose,
  type,
  message,
  action,
}) => {
  return (
    <SnackbarContent type={type} message={(
      <MessageWrapper>
        <Icon>
          {variantIcon[type]}
        </Icon>
        <Message>
          {message}
        </Message>
      </MessageWrapper>
    )} action={action || <Action handleClose={handleClose} />} />
  );
};

export default class Snackbar extends React.Component {

  handleSnackbarConfirm = () => {
    this.setState({
      message: '',
    });
  };

  state = {
    message: '',
    action: <Action handleClose={this.handleSnackbarConfirm} />,
    duration: 4000,
    onClick: null,
    type: null,
  };

  handleSnackbar = ({
    message,
    action = <Action handleClose={this.handleSnackbarConfirm} />,
    duration = 4000,
    onActionClick = null,
    type,
  }) => {
    this.setState({
      message,
      action,
      duration,
      onClick: onActionClick,
      type
    });
  };

  render() {
    const { message, action, duration, onClick, type } = this.state;
    return (
      <>
        <SnackbarContext.Provider
          value={{
            showSnackbar: this.handleSnackbar,
          }}
        >
          <_Snackbar open={!!message} autoHideDuration={duration} onClose={this.handleSnackbarConfirm} type={type}>
            <Content handleClose={onClick || this.handleSnackbarConfirm} message={message} action={action} type={type} />
          </_Snackbar>
          {this.props.children}
        </SnackbarContext.Provider>
      </>
    );
  }
}
