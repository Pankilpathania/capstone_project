import { Link } from 'react-router-dom';
import rajma_chawal from '../../assests/images/rajma_chawal.png';
import chole_bhature from '../../assests/images/chole_bhature.jpg';
import rajasthani_thali from '../../assests/images/rajasthani_thali.jpg';
import './Special.css';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Rajma Chawal',
    image: rajma_chawal,
    price: '$6.99',
    description: `Savor our North Indian comfort classic: Rajma Chawal. 
    Slow-cooked kidney beans, aromatic Basmati rice, and flavorful spices for a satisfying meal.`,
  },
  {
    name: 'Chole bhature',
    image: chole_bhature,
    price: '$5.99',
    description: `Enjoy our tantalizing Chole Bhature: 
    fluffy fried bread paired with spicy chickpea curry, a beloved North Indian street food delight.`,
  },
  {
    name: 'Rajasthani Thali',
    image: rajasthani_thali,
    price: '$15.00',
    description: `Experience the vibrant flavors of Rajasthan with our Rajasthani Thali: 
    a colorful platter featuring authentic dishes showcasing the region's rich culinary heritage..`,
  },
];

export default function Specials () {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to='/orderonline'>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) =>
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

