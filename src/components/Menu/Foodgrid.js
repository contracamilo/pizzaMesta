import styled from 'styled-components';
import { Title } from '../../Styles/title';

export const FoodGrid = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
`

export const FoodLabel = styled(Title)`
  position: absolute;
  b
  padding: 5px;
  font-size:15px;

`;

export const Food = styled.div `
 
 height: 100px; 
 padding: 10px; 
 font-size: 20px; 
 background-image: ${({ img }) => `url(${img});`};
 background-position: center;
 background-size: cover;
 filter: contrast(85%); 
 border-radius: 7px; 
 margin-top: 5px; 
 transition-property: box-shadow margin-top filter; 
 transition-duration: .1s; 
 box-shadow: 0px 0px 2px 0px grey;
 color:white;
 text-shadow: 1px 1px 4px #380502;
 &:hover {
  cursor: pointer; 
  filter: contrast(100%); 
  margin-top: 0px; 
  margin-bottom: 5px; 
  box-shadow: 0px 5px 10px 0px grey;
 }
`