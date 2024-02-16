import React from "react";
import './Home.css'
import SearchBar from "./Form";

function Home() {
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to <span className="grab">GrabnGo</span></h1>
                <br></br>
                <div className="inner-container">
                <p className="parag">Welcome to Grabn<span className="go">Go</span>, where we're dedicated to bringing you the best snacks right to your doorstep! We've designed our interface to be intuitive, so you can easily find your favorite treats and have them delivered in record time.</p>
                </div>
                <br></br>
                <SearchBar/>
            </header>
            <section className="featured-items">
               <div className="pizza">
                <img src='https://images.unsplash.com/photo-1606152196365-d1ce5ea838b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNwZWNpYWwlMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D' alt="Pizza" />
                 <h3>Special Pizza</h3>
                 <p>Fresh from the oven at discounted price </p>
               </div> 
               <div className="burger">
               
                <img src= "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyaWVzfGVufDB8fDB8fHww"alt="Delicious Food" />
                <h3>Chipo mwitu</h3>
                <p>Indulge in our irresistibly crispy and golden Chipo Mwitu</p>
                
                </div>
                
            </section>
            
            <h2>Ordering food made easy</h2>
            <br></br>
            

            <footer>
                <p>&copy; 2024 GrabnGo Express. All rights reserved</p>
            </footer>
        </div>
    )
 }

 

 export default Home;