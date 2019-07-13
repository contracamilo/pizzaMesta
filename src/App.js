import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyles'

const App = () => {

  const [openFood, setOpenFood] = useState();

  return (
    <React.Fragment>
      <GlobalStyle Bg />
      <Navbar />
      <Banner />
      <div>{openFood}</div>
      <Menu setOpenFood={setOpenFood}/>
    </React.Fragment>
  );
}

export default App;
