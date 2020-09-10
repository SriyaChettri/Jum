import React from 'react';

function Faq(props) {
    return(
      <div className="container  " >
         <div className="text-center">
           <br/>
           <br/>
        <h1 style={{color:"#e6ac00"}}><b>Frequently asked questions</b></h1>
        <p>These questions will clear your doubt.</p>
        </div> 
        <div className="row row-content">
          <div className="col-12 col-md-4">
              <h3>What is JUM?</h3>
              <p>JUM is a Micro Mobility Platform service with a mission to solve first mile, last mile and short distance commute problem in urban cities and doing so in a sustainable manner by providing smart IOT based electric cycles. Commuting via JUM will not only help you save your time by providing you an escape from the traffic congestions but also controls air pollution, thereby making your city a better place to live in</p>
          </div>
          <div className="col-12 col-md-4">
              <h3>How does JUM work?</h3>
                <p>JUM uses MILE electric cycles which are custom designed for Indian roads and fitted with a secure lock system. Each vehicle is integrated with a smartphone app which gives you, as a rider, better access, and convenience to take a ride right when you need it.To ensure convenience and better accessibility, we have created designated JUM Docks in your cities. A JUM electric cycle can be picked up from anywhere in the city but must be dropped at JUM docks only. An active ride will not end outside a JUM Dock zone.</p>
          </div>
          <div className="col-12 col-md-4">
              <h3>Creating your account :Verification</h3>
              <p>Once you've downloaded the JUM app, you will need to create a personal JUM Acccount. To get set up all you need is a local phone number.Enter your phone number and request a verification code. Enter the verification code to successfully create your account.</p>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-4">
              <h3>Adding a Payment Method :</h3>
                <p>Before you can ride, you will need to add a payment method. Depending on your location, both credit card or debit card can work.</p>
          </div>
          <div className="col-12 col-md-4">
              <h3>Keeping Track :</h3>
            <p>Now that you're riding, you might want to keep track of your account. On the map page, tap the top left icon to enter your profile.</p>
          </div>
          <div className="col-12 col-md-4">
              <h3>USING A JUM In the App:</h3>
                <p>When you open the Jum app to the map page, you can see the MILE'S located nearby. If you cannot see your location pin, there is a button on the bottom right of the screen that will re-calibrate your location. Click on a MILE nearby to see how far away it is.</p>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-4">
              <h3>On the Street:</h3>
            <p>The MILE's reported location system might be influenced by your surroundings, therefore its actual location may be slightly different from what is shown in the app.</p>
          </div>
          <div className="col-12 col-md-4">
              <h3>Difficulty Unlocking:</h3>
                <p>If you are having trouble unlocking a MILE, please ensure your phone has a data connection. Double-check your JUM app settings.If you are still unable to unlock a bike, please report the issue to your local support team. This can be done directly in-app, by clicking the HELP icon.</p>
          </div>
          <div className="col-12 col-md-4">
              <h3>Unable to End Trip :</h3>
            <p>Please make sure to manually close the lock at the end of every trip.If the trip doesn't end after locking, please report the issue directly in-app. It helps if you are able to attach a photo of the closed lock. Our team will then be able to end the trip on your behalf.</p>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-4">
              <h3>PRICING<br/>Fares:</h3>
                <p>'Pay as you go' rides are calculated depending on the amount of time you ride.
To unlock an MILE an amount of 10 will be charged, in addition to the charge per minute (1 rupee per minute).</p>
          </div>
          <div className="col-12 col-md-4">
              <h3>When am I charged?</h3>
                <p>Unlocking the bike starts the counter for payment, and the counter will stop when you manually lock the cycle. Unlocking the same cycle after locking will start a new Trip.
You won't be charged if you cancel the ride within 2 mins after unlocking a Yoda</p>
          </div>
          <div className="col-12 col-md-4">
              <h3>Park it right <br/>Responsible use :</h3>
                <p>lease abide by local laws and regulations when enjoying MILE.
Ensure you are not obstructing pedestrians or traffic. Park at JUM dock station.
If you see bad parking, please help to set a good example for others. Report it in-app, and if you are able, move the cycle to a suitable location.</p>
          </div>
        </div>
        <div className="text2">
        <h1>Still have questions?</h1>
        <p>Still having doubts. Contact Us, we're here for you.</p>
        <a href="http://localhost:3000/contactus" class="btn btn-primary" >Contact Us</a>
        </div>
        <br/>
        <br/>
        
      </div>

    
    );
}

export default Faq;   