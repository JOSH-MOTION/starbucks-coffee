import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as AppRouter,Routes,Route,Link,} from "react-router-dom";
  import Menu from './Menu';
  import GiftCard from './GiftCard';
  import Rewards from './Rewards';
import Home from './Home';
import FindStore from './FindStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.png'



 
 
function Router() {
  return (
    <AppRouter>
      <nav className='navBar'>
        <div className='navbar-container'>
        
        <ul className='nav-menu'>
          <l1 className='nav-item'>
        <Link to="/" className='nav-links'><img src={logo} className="App-logo" alt="logo" /></Link>
        </l1>
        <l1 className='nav-item'>
        <Link to="/MENU" className='nav-links'>MENU</Link>
        </l1>
        <l1 className='nav-item'>
        <Link to="/REWARDS" className='nav-links'>REWARDS</Link>
        </l1>
        <l1 className='nav-item'>
        <Link to="/GIFTCARD" className='nav-links'>GIFT CARDS</Link>
        </l1>
        
       
        <l1 className='nav-item'>
        <Link to="/FindStore" className='nav-link'>Find a store</Link>
        </l1>
        <button className='sol'>sign in</button>
        <button className='sol2'>Join now</button>
        </ul>
        </div>
      </nav> 

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu /> } />
        <Route path='/GiftCard' element={<GiftCard />} />
        <Route path='/Rewards' element={<Rewards />} />
        <Route path='/FindStore' element={<FindStore />} />
       
      </Routes>

    </AppRouter>
  );
}
 

 export default Router;