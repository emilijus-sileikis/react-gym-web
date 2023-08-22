import React from 'react';
import {Box, Typography, Button} from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

function HeroBanner(props) {
    return (
        <Box sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
                Lorem ipsum <br/> dolor sit amet, <br/> consectetur <br/> adipiscing elit.
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out our mors effective exercises
            </Typography>
            <Button variant="contained" sx={{backgroundColor: "#FF2625", padding: "10px"}} color="error" href="#">
                Explore Exercises
            </Button>
            <Typography fontWeight={600} color="#FF2625" sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize="200px">
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img"></img>
        </Box>
    );
}

export default HeroBanner;