import React from 'react';
import { Box, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
    background-color: white;
    width: 38%;
    margin-left: 10px;
    display: flex;
`

const Input = styled(InputBase)`
    padding: 4px 15px;
    width: 100%;
    font-size: 0.9rem;
    color: grey;
`

const SearchIconWrapper = styled(Box)`
    color: #2874f0;
    padding-top: 6px;
    padding-right: 10px;
`

function SearchBar() {
  return (
    <SearchContainer>
        <Input placeholder='Search for products, brands and more' />
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
    </SearchContainer>
  )
}

export default SearchBar