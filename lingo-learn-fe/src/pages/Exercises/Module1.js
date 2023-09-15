import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  // State variable for storing API data
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch image data from an API (replace 'apiEndpoint' with the actual API URL)
    fetch('http://localhost:8000/api/imageDesc')
      .then(response => response.json())
      .then(data => {
        // Set the fetched data in state
        setImageData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        imageData.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <img src={item.imageUrl} alt={item.description} width={'80px'}/>
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </div>
  );
}
