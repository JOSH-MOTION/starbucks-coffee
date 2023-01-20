import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic2 from './images/pic2.jpeg'
import pic3 from './images/pic3.png'
import pic4 from './images/pic4.png'
import pic5 from './images/pic5.png'
import pic6 from './images/pic6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpotify , faFacebook, faPinterest, faInstagram, faYoutube, faTwitter, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"



 function Home() {
  return (
   <>
    <div className='container-fluid all'>
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
  <div className='row'>
   <div className=' col-md 12 boxx4'>
     <h3>Start fresh with Starbucks<sup>®</sup> Rewards</h3>
     <p>Join today to earn your way to free coffee and treats.<sup>*</sup></p>
   </div>
   </div>
    
    </div>

    <div className='footer'>
      <div className='container-fluid'>
        <div className='col-md-12'>

        </div>
        <div className='row'>
          <div className='col-md-2 first'>
              <h3>About Us</h3>
              <ul>
                <li>Our Company</li>
                <li>Our Coffee</li>
                <li>Stories and News</li>
                <li>Starbucks Archive</li>
                <li>Investor Relations</li>
                <li>Customer Service</li>

              </ul>
          </div>
         
          <div className='col-md-2 second'>
              <h3>Careers</h3>
              <ul>
                <li>Culture and Values</li>
                <li>Inclusion,Diversity and Equity</li>
                <li>College Achievement Plan</li>
                <li>Alumni Community</li>
                <li>U.S Careers</li>
                <li>International Careers</li>

              </ul>
          </div>

        
          
            <div className='col-md-2 third'>
              <h3>Social Impact</h3>
              <ul>
                <li>People</li>
                <li>Planet</li>
                <li>Environmental and Social Impact Reporting</li>
                

              </ul>
          </div>
          
          <div className='col-md-2 fourth'>
          
              <h3>For Business Partners</h3>
              <ul>
                <li>Landlord Support Center</li>
                <li>Suppliers</li>
                <li>Coporate Gift Card Sales</li>
                <li>Office and Fodservice Coffee</li>
                <li>Investor Relations</li>
                <li>Customer Service</li>

              </ul>
          </div>
          
         
          <div className='col-md-3 fifth'>
              <h3>About Us</h3>
              <ul>
                <li>Our Company</li>
                <li>Our Coffee</li>
                <li>Stories and News</li>
                <li>Starbucks Archive</li>
                <li>Investor Relations</li>
                <li>Customer Service</li>

              </ul>
          </div>
          
          
          
          
        </div>

      </div>
      <center>
      <hr />
      </center>

      <div className='social'>
        <ul>
      <li><FontAwesomeIcon icon={faSpotify} /></li>
      <li><FontAwesomeIcon icon={faFacebook} /></li>
      <li><FontAwesomeIcon icon={faPinterest} /></li>
      <li><FontAwesomeIcon icon={faInstagramSquare} /></li>
      <li><FontAwesomeIcon icon={faYoutube} /></li>
      <li><FontAwesomeIcon icon={faTwitter} /></li>
      </ul>
      </div>
        
      

    </div>
    </>
  );
}




export default Home;