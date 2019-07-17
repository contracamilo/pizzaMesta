import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyles';
import { FoodDialog } from './components/FoodDialog/FoodDialog';
import { Order } from './components/Order/Order';
//hooks
import { useOpenFood  } from './Hooks/useOpenFood'
import { useOrders  } from './Hooks/useOrders'
import { useTitle } from './Hooks/useTitle'
import { useAuthentication } from './Hooks/useAuthentication'



const database = window.firebase.database();

const refTest = database.ref('testObj').push();
refTest.set({
  hello:'world'
})


const App = () => {
  //hooks
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();

  useTitle({...openFood, ...orders})
  
  return (
    <React.Fragment>
      <GlobalStyle Bg />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth}/>
      <Order {...orders} {...openFood}/>
      <Banner />
      <Menu {...openFood}/>
    </React.Fragment>
  );
}

export default App;
