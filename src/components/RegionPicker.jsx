import React from 'react';
import "../App.css";
import africaimg from '../assets/africa.jpg';
import americasimg from '../assets/americas.PNG';
import asiaimg from '../assets/asia.jpg';
import europeimg from '../assets/europe.PNG';
import oceaniaimg from '../assets/oceania.jpg';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const RegionPicker = ({onRegionPickHandler}) => {
  return (
    <div>
        <CssBaseline />
        <Container fixed>
            <Box 
            sx={{ bgcolor: '#F5F5DC', minheight: '90vh',display:"flex",alignItems:"center",justifyContent:"center",width:"100%",margin:"10px 0" }}>

<Grid container spacing={1} columns={12}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => onRegionPickHandler("africa")}
              >
                <div className="region-image">
                  <img src={africaimg} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3" className="legend">
                    Africa
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => onRegionPickHandler("europe")}
              >
                <div className="region-image">
                  <img src={europeimg} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Europe</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => onRegionPickHandler("asia")}
              >
                <div className="region-image">
                  <img src={asiaimg} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Asia</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => onRegionPickHandler("americas")}
              >
                <div className="region-image">
                  <img src={americasimg} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Americas</Typography>
                </div>
                
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => onRegionPickHandler("oceania")}
              >
                <div className="region-image">
                  <img src={oceaniaimg} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Oceania</Typography>
                </div>
                
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default RegionPicker;
