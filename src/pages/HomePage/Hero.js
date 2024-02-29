import { Link } from 'react-router-dom';
import restaurantFoodImage from '../../assests/images/indian-chef-serving-food.webp';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>India</h2>
          <p>
            We are a family owned Indian restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <Link className="button-primary" to='/reservation'>
            Reserve a table
          </Link>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

