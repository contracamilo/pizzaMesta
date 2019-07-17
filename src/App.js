import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyles';
import { FoodDialog } from './components/FoodDialog/FoodDialog';
import { Order } from './components/Order/Order';
import { OrderDialog } from './components/Order/OrderDialog'
//hooks
import { useOpenFood  } from './Hooks/useOpenFood'
import { useOrders  } from './Hooks/useOrders'
import { useTitle } from './Hooks/useTitle'
import { useAuthentication } from './Hooks/useAuthentication'
import { useOrderDialog } from './Hooks/useOrderDialog'




const App = () => {
  //hooks
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  useTitle({...openFood, ...orders})
  
  return (
    <React.Fragment>
      <GlobalStyle Bg />
      <OrderDialog {...orderDialog} {...orders} />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth}/>
      <Order {...orders} {...openFood} {...auth}  {...orderDialog}/>
      <Banner />
      <Menu {...openFood}/>
    </React.Fragment>
  );
}

export default App;
