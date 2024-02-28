import {
    faStar,
    faStarHalfStroke
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import './TestimonialCard.css';

export default function TestimonialCard({ customer }){
  const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };
    return (
      <article className="testimonial-card">
        <img src={customer.image} alt={customer.fullName} />
        <h4>{customer.fullName}</h4>
        <span>
          {customer.rating.map((ratingPoint, index) => 
            <FontAwesomeIcon 
              key={index} 
              icon={ratingLevels[ratingPoint]} 
              size="xs" 
            />
          )}
        </span>
        <blockquote><p>"{customer.says}"</p></blockquote>
      </article>
    );
  };
  