import React from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  DialogFooter,
  ConfirmButton
} from "../FoodDialog/FoodDialog";
import { formatPrice } from '../../Data/FoodData'
import { getPrice } from '../FoodDialog/FoodDialog'

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 60px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 15;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 10px 20px 150px 20px 50px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;


export const Order = ({orders}) => {

  const subtotal = orders.reduce((total, order) => total + getPrice(order) , 0)
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <OrderStyled>
      
      { orders.length === 0 
        ? <OrderContent>Your order's looking pretty empty.</OrderContent>
        : <OrderContent>
            <OrderContainer> Found {orders.length} orders </OrderContainer>
            {orders.map((order, index) => (
                <OrderContainer> 
                    <OrderItem key={index+1}>
                        <div>Ref.{index+1}</div>
                        <div></div>
                        <div>{order.name}</div>
                        <div>x{order.quantity}</div>
                        <div>{formatPrice(getPrice(order))}</div>
                    </OrderItem>
                    <DetailItem>
                    {order.toppings
                      .filter(t => t.checked)
                      .map(topping => topping.name)
                      .join(", ")}
                    </DetailItem>
                </OrderContainer>
                
            ))}
            <OrderContainer> 
              <OrderItem>
                <div>Sub:</div>
                <div></div>
                <div>{formatPrice(subtotal)}</div>
              </OrderItem>
              <OrderItem>
                <div>Tax:</div>
                <div></div>
                <div>{formatPrice(tax)}</div>
              </OrderItem>
              <OrderItem>
                <div>Total:</div>
                <div></div>
                <div>{formatPrice(total)}</div>
              </OrderItem>
            </OrderContainer>
          </OrderContent>
      
      
      
      }
      <DialogFooter>
         <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter> 
    </OrderStyled>
  )
}


