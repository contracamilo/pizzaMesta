import React from 'react';
import styled from 'styled-components';


export const BannerStyled = styled.div` 
    height: 200px;
    background: url("https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center center;
    background-size:cover;
    filter:contrast(75%);
`

const Banner = () => {
  return (
    <BannerStyled>
      Banner
    </BannerStyled>
  )
}

export default Banner
