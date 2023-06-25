import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import facebookicon from '../images/facebook.png';
import googleicon from '../images/google.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png'

const Countries = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [asia, setAsia] = useState([]);

  const fetchAsianData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/region/asia');
      const data = response.data;
      setAsia(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const fetchEuropeanData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/region/europe');
      const data = response.data;
      console.log(data)
      setAsia(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchAllData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      const data = response.data;
      setAsia(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    setMobileOpen({ ...mobileOpen, [anchor]: open });
  };

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

  const menuItems = [
    { label: 'All', action: fetchAllData },
    { label: 'Asia', action: fetchAsianData },
    { label: 'Europe', action: fetchEuropeanData },
  ];

  const menuIcon = {
    position: 'fixed',
    top: '5%',
    right: '5%',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  };

  const Navbar = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    position: 'fixed',
  };

  const headingLogo = {
    fontFamily: 'Hind, sans-serif',
    position: 'fixed',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      left: '5%',
      top: '5%',
    },
  };

  const childNavbar = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '40px',
    paddingTop: '30px',
    paddingRight: '200px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      paddingRight: '30px',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  };

  const underline = {
    position: 'relative',
    cursor: 'pointer',
    fontFamily: 'Hind, sans-serif',
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 0,
      height: '2px',
      backgroundColor: 'black',
      transformOrigin: 'left',
      transition: 'width 0.3s ease',
    },
    '&:hover::before': {
      width: '100%',
    },
  };
  const countriesbox ={
    justifyContent:'center',
    paddingTop:'100px',
    paddingLeft:'180px',
    paddingRight:'180px',
    // paddingBottom:'100px',

    display:'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap:theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      justifyContent:'center',
      paddingLeft:'160px',
      paddingRight:'180px',
      alignItems:'center'
    },
  }
  const imagebox={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    columnGap:theme.spacing(2),
    width:'350px',
    border:'2px solid #3C3C3C',
    padding:'20px 10px',
    boxShadow: '8px 2px 5px 0 rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('sm')]: {
      maxWidth:'100%',
      paddingLeft:'10px',
      marginLeft:'20px',
      width:'280px'

    },
  }
  const countryimage={
    width:'100px',
    height:'50px'
  }
  const stylename={
    color: '#3C3C3C',
    fontWeight:'bold',
    fontSize:'20px'
  }
  const styleregion={
    color: '#3C3C3C',
    fontSize:'12px',
  }
  const signinBox = {
    paddingTop:theme.spacing(20),
    paddingBottom:theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    rowGap: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(5)
    },
  };
  const icons = {
    display: 'flex',
    flexDirection: 'row',
    columnGap: theme.spacing(2.2),
    paddingLeft:'5px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]:{
      maxWidth:'130px',
      justifyContent:'center'
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
  const email ={
    color:'#3C3C3C',
    fontWeight:'bold'
  }
  const copy ={
    color:'#3C3C3C',
    fontWeight:'bold'
  }

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'left' ? 250 : 650 }} role="presentation">
      <List>
        {['All', 'Asia','Europe'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={menuItems[index].action}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Drawer anchor="left" open={mobileOpen['left']}>
            <CloseIcon onClick={toggleDrawer('left', false)} />
            {list('left')}
          </Drawer>
          <MenuIcon onClick={toggleDrawer('left', true)} sx={menuIcon} />
        </Box>
        <Box sx={Navbar}>
          <Box>
            <Typography sx={headingLogo}>Countries</Typography>
          </Box>
          <Box sx={childNavbar}>
            {menuItems.map((item, index) => (
              <Typography
                key={item.label}
                variant="body2"
                sx={underline}
                onClick={item.action}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box>
          <Box sx={countriesbox}>
          {asia.map((item, index) => (
          <Box key={index} sx={imagebox}>
            <img src={item.flags.png} alt={item.name} style={countryimage}/>
            <Box>
              <Typography sx={stylename}>{item.name}</Typography>
              <Typography sx={styleregion}>{item.region}</Typography>
            </Box>
          </Box>
        ))}

          </Box>

        </Box>
        <Box sx={signinBox}>
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
                <Typography sx={email}>Example@email.com</Typography>
                <Typography sx={copy}>&copy; 2023 Name. All rights reserved.</Typography>
              </Box>
        
      </Container>
    </Box>
  );
};

export default Countries;
