import React from 'react';
import{ Box, Typography, styled, AppBar, Toolbar } from '@mui/material';
import { items } from '../../config/headerContent';

const ContentWrapper = styled(AppBar)`
    display: flex;
    padding: 5px 70px;
    margin-top: 55px;
    background-color: white;
`

const ItemWrapper = styled(Box)`
    margin: 5px 20px;
`
const Image = styled('img')({
    height: '70px',
    width: '70px'
})

const Title = styled(Box)`
    font-size: 0.9rem;
    font-weight: 600;
    color: black;
`


function ItemHeader() {
  return (
    <ContentWrapper>
        <Toolbar>
        {
            items ? items.map((ele)=> {return(
            <ItemWrapper key={ele.id}>
                <Image src={ele.image} alt='..items' />
                <Title variant='span'>{ele.name}</Title>
            </ItemWrapper>
            )})
            : null
        }
        </Toolbar>
    </ContentWrapper>
  )
}

export default ItemHeader