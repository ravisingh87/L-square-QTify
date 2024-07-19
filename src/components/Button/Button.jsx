import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import './Button.css';

const CutomButton = ({ title, handleModal, color, textColor }) => {
  return (
    <Button
      onClick={handleModal}
      sx={{
        backgroundColor: `${color}`,
        color: `${textColor}`,
        ':hover': { backgroundColor: `${color}!important` }
      }}>
      {title}
    </Button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  handleModal: PropTypes.func
};

export default CutomButton;
