import React from 'react'
import pic3 from './images/pic3.png'



 function Home() {
  return (
    <div className='container-fluid '>
      <div className='row box'>
        <div className='col-md 6 box1' >
        <h3>Merry laee-minute gifts</h3>
          <p>Send holiday cheer in a flash with a thoughtful Starbucks eGift.</p>
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
  <div className='col-md 6 boxx'>
      <h1>Merry sips and <br />trips</h1>
      <p>Link your Starbucks® Rewards + Delta<br /> SkyMiles® accounts for festive new benefits—<br />
      like 1 mile for every $1* spent.</p>
  </div>

  <div className='col-md 6'>
    <img src={pic3.png} className="Apjj" alt="pic3" />
    
  </div>
</div>
    </div>
  );
}




export default Home;