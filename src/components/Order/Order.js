import React from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  DialogFooter,
  ConfirmButton
} from "../FoodDialog/FoodDialog";
import { formatPrice } from '../../Data/FoodData'
import { getPrice } from '../FoodDialog/FoodDialog'
//import { cursor } from 'sisteransi';
import { allResolved } from 'q';


const database = window.firebase.database();

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
  grid-template-columns: 10px 150px 20px  20px 50px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;


const sendOrder = (orders, { email, displayName }) => {
  const  newOrderRef = database.ref("orders").push();
  const newOrders = orders.map(order => {
    return Object.keys(order).reduce((acc, orderKey) => {
      if (!order[orderKey]) {
        // undefined value
        return acc;
      }
      if (orderKey === "toppings") {
        return {
          ...acc,
          [orderKey]: order[orderKey]
          .filter(({ checked }) => checked)
          .map(({ name }) => name)
        };
      }
      return {
        ...acc,
        [orderKey]: order[orderKey]
      };
    }, {});
  });
  newOrderRef.set({
    order: newOrders,
    email,
    displayName
  });
}

export const Order = ({orders, setOrders, setOpenFood, login, loggedIn, setOpenOrderDialog}) => {

  const subtotal = orders.reduce((total, order) => total + getPrice(order) , 0)
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
   
  };

  return (
    <OrderStyled>
      
      { orders.length === 0 
        ? <OrderContent>Your order's looking pretty empty.</OrderContent>
        : <OrderContent>
            <OrderContainer> Found {orders.length} orders </OrderContainer>
            {orders.map((order, index) => (
                <OrderContainer key={index+1} editable> 
                    <OrderItem
                       onClick={() => {
                        setOpenFood({ ...order, index });
                      }}
                    >
                        <div>{index+1}.</div>
                        <div>{order.name}</div>
                        <div
                          style={{ cursor: "pointer", zIndex:99, pointerEvents:allResolved }}
                          onClick={e => {
                            e.stopPropagation();
                            deleteItem(index);
                          }}
                        >
                          🗑                    ️
                        </div>
                        <div>x{order.quantity}</div>
                        <div>{formatPrice(getPrice(order))}</div>
                    </OrderItem>
                    <DetailItem>
                    {order.toppings
                      .filter(t => t.checked)
                      .map(topping => topping.name)
                      .join(", ")}
                    </DetailItem>
                    {order.choice && <DetailItem>{order.choice}</DetailItem>}
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
      {orders.length > 0 && <DialogFooter>
         <ConfirmButton onClick={() => {
          if (loggedIn) {
            setOpenOrderDialog(true);
            sendOrder(orders, loggedIn);
          } else {
            login();
          }
        }}>Checkout</ConfirmButton>
      </DialogFooter> }
    </OrderStyled>
  )
}


