import { Box, Container, TextField, ThemeProvider, Typography, createTheme, Button, FormControlLabel, Checkbox } from '@mui/material';
import React from 'react';
import illustration from '../images/Illustration.png';
import facebookicon from '../images/facebook.png';
import googleicon from '../images/google.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png'
import { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const Loginpages = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email) {
      setIsFormSubmitted(true);
      navigate('/countries')
    }
    else{
      alert('Enter username and email')
    }
  };

  const boxStyles = {
    backgroundColor: 'white',
    height: '100vh',
  };
  const Containerstyles = {
    display: 'flex',
    justifyContent: 'center', // Center the loginbox horizontally
    alignItems: 'center',
    columnGap: theme.spacing(10),
    flexDirection: 'row', // Stack the loginbox vertically on small screens
  };
  const loginbox = {
    display: 'flex',
    justifyContent:"center",
    alignItems: 'flex-start', // Center the content vertically
    flexDirection: 'column',
    rowGap: theme.spacing(1),
    maxWidth: '500px', // Set a maximum width for the loginbox
    width: '100%', 
    paddingTop:theme.spacing(10),
    paddingBottom:theme.spacing(10),// Take up the full width of the container 
    [theme.breakpoints.down('sm')]:{
      maxWidth:'100%',
      alignItems:'center',
      paddingRight:theme.spacing(15)
    }
  };
  const Heading = {
    fontFamily: 'Hind, sans-serif',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color:'3C3C3C',
    fontSize: '40px',
    [theme.breakpoints.down('sm')]:{
      fontSize: '20px',
      paddingLeft:'80px'
    }
  };
  const Subheading = {
    fontFamily: 'Hind, sans-serif',
    fontSize: '20px',
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]:{
      fontSize: '11px',
    }
  };
  const imagebox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:'50px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  };
  const childSubheading = {
    color: '#587FFF',
    fontSize: '20px',
    [theme.breakpoints.down('sm')]:{
      fontSize: '11px',

    }
  };
  const childbox = {
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'row',
    columnGap: theme.spacing(1),
    paddingBottom: '10px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]:{
      paddingLeft:theme.spacing(12),
      justifyContent:'center',
      alignItems:'center',
      maxWidth:'170px',
      width:'100%'

    }
  };
  const formbox = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(2),
  };
  const inputField = {
    borderRadius: '0px',
    border: '2px solid black',
    width: '160%', // Use 100% width for the input fields
    height: '40px',
    '::placeholder': {
      color: 'black',
      fontStyle: 'italic',
      maxWidth: '100%',
    },
  };
  const button = {
    backgroundColor: '#3C3C3C',
    width: '160%', // Use 100% width for the button
    height: '50px',
  };
  const signinBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: theme.spacing(4),
  };
  const signin = {
    paddingTop:'20px',
    paddingLeft: '5px',
    [theme.breakpoints.down('sm')]:{
      paddingLeft:'120px',
      width:'60%',
      maxWidth:'80%'
    }
  };
  const icons = {
    display: 'flex',
    flexDirection: 'row',
    columnGap: theme.spacing(2.2),
    paddingLeft:'5px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]:{
      maxWidth:'130px',
      paddingRight:'20px',
    }
  };
  const iconImage = {
    width: '50px',
    height: '50px',
    [theme.breakpoints.down('sm')]: {
    width: '5%',
    height: '5%',
    },
  };
  const signme = {
    fontSize: '14px',
    color: '#3C3C3C',
    fontWeight: 'bold',
    position: 'relative', // Add position relative to the parent container
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '50%',
      left: '-60%',
      transform: 'translateY(-50%)',
      width: '50px',
      height: '0.5px',
      backgroundColor: 'black',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '50%',
      right: '-60%',
      transform: 'translateY(-50%)',
      width: '50px',
      height: '0.5px',
      backgroundColor: 'black',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      '&::before': {
        content: "''",
        position: 'absolute',
        top: '50%',
        left: '-50%',
        transform: 'translateY(-50%)',
        width: '50px',
        height: '0.5px',
        backgroundColor: 'black',
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        top: '50%',
        right: '-20%',
        transform: 'translateY(-50%)',
        width: '50px',
        height: '0.5px',
        backgroundColor: 'black',
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxStyles}>
        <Container>
          <Box sx={Containerstyles}>
            <Box sx={loginbox}>
              <Typography sx={Heading}>Sign In</Typography>
              <Box sx={childbox}>
                <Typography sx={Subheading}>New user?</Typography>
                <Typography sx={childSubheading}>Create an Account</Typography>
              </Box>
              <Box component="form" onSubmit={handleSubmit} sx={formbox}>
                <input
                  type="text"
                  placeholder="Username or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputField}
                />
                <input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputField}
                />
                <Box display="flex" flexDirection="row">
  <FormControlLabel
    control={<Checkbox />}
    label={
      <Typography variant="body2" sx={{fontWeight:'bold'}}>
        Keep me signed in
      </Typography>
    }
    sx={{ marginRight: '10px' }}
  />
</Box>

                <Button sx={button} variant="contained" type="submit">
                  Sign In
                </Button>
              </Box>
              <Box sx={signinBox}>
                <Box sx={signin}>
                  <Typography sx={signme}>Or Sign in with</Typography>
                </Box>
                <Box sx={icons}>
                <img
                    src={googleicon}
                    alt="Google"
                    style={iconImage}
                  />
                  <img
                    src={facebookicon}
                    alt="Facebook"
                    style={iconImage}
                  />
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={iconImage}
                  />
                   <img
                    src={twitter}
                    alt="Twitter"
                    style={iconImage}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={imagebox}>
              <img
                src={illustration}
                alt="image"
                style={{ width: '500px', height: '500px', objectFit: 'contain' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Loginpages;
