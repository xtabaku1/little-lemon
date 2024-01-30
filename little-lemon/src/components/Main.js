// Main.js
import React from "react";
import "./Main.css";
import salad from "./../images/salad.jpg";
import bruschetta from "./../images/bruschetta.jpg";
import dessert from "./../images/dessert.jpg";
import restaurant from "./../images/restaurant.jpg";
import delivery from "./../images/delivery.jpg";

const Main = () => {
  return (
    <main className="main">
      <section className="first-section">
        {/* Column 1 */}
        <div>
          <h2 className="title">Little Lemon</h2>
          <p className="sub-title">Chicago</p>
          <p className="article">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="button">Reserve a Table</button>
        </div>
        {/* Column 2 */}
        <div>
          <img src={restaurant} alt="Restaurant" />
        </div>
      </section>

      {/* Row 2 */}
      <section className="second-section">
        <h2>This weeks specials!</h2>
        <button className="button">Online Menu</button>
      </section>

      {/* Row 3 */}
      <section className="third-section">
        {/* Column 1 */}
        <div className="third-section-item">
          <div className="image-div">
            <img src={salad} alt="Salad" />
          </div>
          <div className="title-price">
            <h3>Greek salad</h3> <h3>$12.99</h3>
          </div>
          <p className="description">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons
          </p>
          <div className="delivery">
            <h4>Order a delivery</h4>
            <div className="delivery-icon">
              <img src={delivery} alt="Delivery" />
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="third-section-item">
          <div className="image-div">
            <img src={bruschetta} alt="Bruschetta" />
          </div>
          <div className="title-price">
            <h3>Bruschetta</h3>
            <h3>$5.99</h3>
          </div>
          <p className="description">
            Our bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <div className="delivery">
            <h4>Order a delivery</h4>
            <div className="delivery-icon">
              <img src={delivery} alt="Delivery" />
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="third-section-item">
          <div className="image-div">
            <img src={dessert} alt="Dessert" />
          </div>
          <div className="title-price">
            <h3>Lemon Dessert</h3> <h3>$5.00</h3>
          </div>
          <p className="description">
            This comes strait from grandma's recipe book, every last ingredient
            has been sourced and is as authentic as can be imagined.
          </p>
          <div className="delivery">
            <h4>Order a delivery</h4>
            <div className="delivery-icon">
              <img src={delivery} alt="Delivery" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
