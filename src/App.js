import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyles';
import { FoodDialog } from './components/FoodDialog/FoodDialog';
import { Order } from './components/Order/Order';

const App = () => {

  const [openFood, setOpenFood] = useState();

  return (
    <React.Fragment>
      <GlobalStyle Bg />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
      <Navbar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood}/>
    </React.Fragment>
  );
}

export default App;
