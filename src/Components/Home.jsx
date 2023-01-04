import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic2 from './images/pic2.jpeg'
import pic3 from './images/pic3.png'
import pic4 from './images/pic4.png'
import pic5 from './images/pic5.png'
import pic6 from './images/pic6.png'



 function Home() {
  return (
   
    <div className='container-fluid '>
      <div className='row box'>
        <div className='col-md 6 box1' >
        <img src={pic3} className="Aff" alt="pic3" />
        </div>
      <div className='col-md 6 box2' >
      <h3>Merry last-minute gifts</h3>
          <p>Send holiday cheer in a flash with a thoughtful Starbucks
            <br /> 
            eGift.
            </p>
            <button className='butn'>Buy now</button>
</div>
</div>

<div className='row boxw'>
  <div className='col-md 12 boxx'>
      <h1>Merry sips and <br />trips</h1>
      <p>Link your Starbucks® Rewards + Delta<br /> SkyMiles® accounts for festive new benefits—<br />
      like 1 mile for every $1* spent.</p>
      <button className='butn1'> Link now</button>
      <img src={pic2} className="Apjj" alt="pic3" />
  </div>
  </div>
  
      <div className='row boxw'>
  <div className='col-md 12 boxx1'>
  <img src={pic4} className="imga3" alt="pic4" />
      <h1>Starbucks for Life</h1>
      <p>’Tis the season for everyone’s favorite holiday<br /> game! Play now for your chance to
         win—<br />millions of prizes await. **</p>
      <button className='butn1'> Play now</button>
    
  </div>
  </div>


  <div className='row boxw'>
  <div className='col-md 12 boxx2'>
  <img src={pic5} className="imga4" alt="pic5" />
      <h4>Cozy caramel</h4>
      <p>Our creamy and comforting Caramel Brulée Latte is the<br /> gift you give yourself.</p>
      <button className='butn2'> Order now</button>
    
  </div>
  </div>


  <div className='row boxw'>
  <div className='col-md 12 boxx3'>
  <img src={pic6} className="imga5" alt="pic6" />
      <h4>Heartwarming classic</h4>
      <p>Savor a Signature Hot Chocolate, crafted with steamed<br /> milk and chocolaty drizzle.</p>
      <button className='butn3'> Order now</button>
    
  </div>
  </div>
  
   
    
 

    </div>
    
  );
}




export default Home;