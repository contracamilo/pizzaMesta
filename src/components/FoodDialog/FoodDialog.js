import React from 'react'
import styled from 'styled-components';
import { FoodLabel } from "../Menu/Foodgrid";
import { Title } from '../../Styles/title';
import { pizzaRed } from '../../Styles/colors';
import { formatPrice } from '../../Data/FoodData'
import { QuantityInput } from './QuantityInput';
import { Choices } from "./Choices";
//hooks
import { useQuantity } from "../../Hooks/useQuantity";
import { useToppings } from "../../Hooks/useToppings";
import { useChoice } from "../../Hooks/useChoices";
import { Toppings } from './Topings';


export const Dialog = styled.div` 
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index: 12;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 11;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (`background-image: url(${img});`)}
  background-position: center;
  background-size: cover;
`;




const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  color:white;
  text-shadow: 1px 1px 4px #380502;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  line-height: 1;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  ${({ disabled }) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

const pricePerTopping  = 0.5;

export const getPrice = (order) => 
    order.quantity *  (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping);

const hasToppings = (food) => food.section === "Pizza";


export const FoodDialogContainer  = ({ openFood, setOpenFood, setOrders, orders }) => {

    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings);
    const choiceRadio = useChoice(openFood.choice);

    const close = () => setOpenFood();

    if (!openFood) return null;

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
        choice: choiceRadio.value
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        close();
    }

   

    return (openFood ? (
        <React.Fragment>
            <Dialog>
                <DialogBanner img={openFood.img}>
                    <DialogBannerName> {openFood.name} </DialogBannerName>
                </DialogBanner>
                <DialogContent>
                    <QuantityInput quantity={quantity}/>
                    {hasToppings(openFood) && (
                        <div>
                            <h3> Would you like toppings? </h3>
                            <Toppings {...toppings} />
                        </div>
                    )}
                    {openFood.choices && (
                        <Choices openFood={openFood} choiceRadio={choiceRadio} />
                    )}
                </DialogContent>
                <DialogFooter>
                    <ConfirmButton
                        onClick={addToOrder}
                        disabled={openFood.choices && !choiceRadio.value}
                    >
                        Add to order
                        {formatPrice(getPrice(order))}
                    </ConfirmButton>
                </DialogFooter>
               
            </Dialog>
            <DialogShadow onClick={close}/>
        </React.Fragment>
    ) : null
    )
}

export const FoodDialog = (props) =>  {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props} /> 
}

