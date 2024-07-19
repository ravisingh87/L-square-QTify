import React from 'react';
import './FeedBackModal.css';
import { Box, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import CutomButton from '../Button/Button';

const FeedBackModal = ({ open, handleModal }) => {
  return (
    <Modal
      open={open}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box className="feed_back_modal">
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center'
          }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              width: '90%',
              textAlign: 'center',
              paddingLeft: '15px',
              fontFamily: 'var(--font)'
            }}>
            Feedback
          </Typography>
          <CloseIcon onClick={handleModal} sx={{ cursor: 'pointer' }} />
        </Box>
        <Box
          component="form"
          autoComplete="off"
          sx={{
            width: '492px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font)',
            flexDirection: 'column',
            gap: 2,
            marginTop: '10px'
          }}>
          <TextField
            id="outlined-search"
            label="Full name"
            fullWidth
            sx={{
              '&.Mui-focused': {
                borderColor: '#34c94b'
              },
              input: {
                height: '8px'
              },
              label: {
                top: '-7px'
              },
              fieldSet: {
                borderColor: '#34c94b'
              }
            }}
          />
          <TextField
            id="outlined-search"
            label="Email ID"
            fullWidth
            sx={{
              '&.Mui-focused': {
                borderColor: '#34c94b'
              },
              input: {
                height: '8px'
              },
              label: {
                top: '-7px'
              },
              fieldSet: {
                borderColor: '#34c94b'
              }
            }}
          />
          <TextField
            id="outlined-search"
            label="Subject"
            fullWidth
            sx={{
              '&.Mui-focused': {
                borderColor: '#34c94b'
              },
              input: {
                height: '8px'
              },
              label: {
                top: '-7px'
              },
              fieldSet: {
                borderColor: '#34c94b'
              }
            }}
          />
          <TextField
            id="outlined-search"
            label="Description"
            multiline
            fullWidth
            rows={4}
            sx={{
              '&.Mui-focused': {
                borderColor: '#34c94b'
              },
              input: {
                height: '25px'
              },
              fieldSet: {
                borderColor: '#34c94b'
              }
            }}
          />
          <CutomButton
            title="Submit Feedback"
            color="var(--color-primary)"
            textColor="var(--color-white)"
          />
        </Box>
      </Box>
    </Modal>
  );
};

FeedBackModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired
};

export default FeedBackModal;
