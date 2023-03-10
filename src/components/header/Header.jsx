import React from 'react';
import { AppBar, Toolbar, styled, Box, Button, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const HeaderComponent = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;
`

const Heading = styled(Box)`
    font-size: 1.3rem;
    font-weight: 800;
    font-style: italic;
`

const Subheading = styled(Box)`
    font-size: 0.7rem;
    font-style: italic;
    font-weight: 700;
`

const ButtonWrapper = styled(Box)`
    width: 9%;
    margin-left: 20px;
`

const  LoginButton = styled(Button)`
    background-color: white;
    color: #2874f0;
    font-weight: 600;
    width: 100%;
    border-radius: 0px;
    padding: 2px;
    text-transform: capitalize;
    font-size: 0.95rem;
    margin-right: 20px;
    `

const Wrapper = styled(Box)`
    display: flex;
`

const Section = styled(Typography)`
    font-weight: 600;
    margin: 0px 25px;
`

export default function Header() {
  return (
    <div>
        <HeaderComponent>
            <Toolbar style={{minHeight: '55px'}}>
                <Box style={{display: 'flex',flexDirection: 'column', lineHeight: '1', marginLeft: '160px'}}>
                    <Heading component='span'>Flipkart</Heading>
                    <Subheading>
                        <Box component='span'>Explore</Box>&nbsp;
                        <Box component='span' style={{color: 'yellow'}}>Plus+</Box>
                    </Subheading>
                </Box>
                <SearchBar />

                <ButtonWrapper>
                    <LoginButton variant='contained'>Login</LoginButton>
                </ButtonWrapper>

                <Wrapper>
                    <Section>Become a Sellar</Section>
                    <Section style={{marginRight: '0px'}}>More</Section> &nbsp; <KeyboardArrowDownIcon style={{marginRight: '20px'}}/>
                    <ShoppingCartIcon style={{paddingTop: '3px', marginLeft: '20px'}} />&nbsp;<Section style={{margin:'0px'}}>Cart</Section>
                </Wrapper>
            </Toolbar>
        </HeaderComponent>
    </div>
  )
}
