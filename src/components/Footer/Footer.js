import React from 'react';
import './Footer.css';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Footer = () => {
  return (
    <footer>
      <div className="footer-secion">
        <h6>FAQs</h6>
        <div>
          <Accordion
            sx={{
              backgroundColor: 'black',
              border: '1px solid white',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              color: '#ffffff',
              '& .MuiAccordionDetails-root': {
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px'
              }
            }}>
            <AccordionSummary
              sx={{ borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#34c94b'
                  }}
                />
              }
              aria-controls="panel1-content"
              id="panel1-header">
              <Typography>Is QTify free to use?</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: '#ffffff', color: 'black', textAlign: 'left' }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded
            sx={{
              mt: 2,
              backgroundColor: 'black',
              border: '1px solid white',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              color: '#ffffff'
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#34c94b' }} />}
              aria-controls="panel2-content"
              id="panel2-header">
              <Typography>Can I download and listen to songs offline?</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: '#ffffff', color: 'black', textAlign: 'left' }}>
              <Typography>
                Sorry, unfortunately we don't provide the service to download any songs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
