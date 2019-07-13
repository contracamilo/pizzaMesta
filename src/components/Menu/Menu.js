import React from 'react'
import styled from 'styled-components';
import { foods } from '../../Data/FoodData'
import { Food, FoodGrid, FoodLabel } from './Foodgrid'

export const MenuStyled = styled.div` 
   margin: 0 400px 50px 20px;
`
export const Menu = ({setOpenFood}) => {
    return (
        <MenuStyled>
            {Object.entries(foods).map(([sectionName, foods], index) => (
                <React.Fragment>
                    <h1> {sectionName} </h1>
                    <FoodGrid key={index}>
                        {foods.map((food, index ) => (
                            
                                <Food 
                                    key={`food-${index}`} 
                                    img={food.img} 
                                    onClick={()=> {
                                    setOpenFood(food)
                                }}>
                                    <FoodLabel>
                                        <div>{food.name}</div>
                                    </FoodLabel>
                                </Food>
                           
                        ))}
                    </FoodGrid>
                </React.Fragment>
            ))}
        </MenuStyled>
    )
}


