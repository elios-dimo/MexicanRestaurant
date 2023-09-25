import React from 'react';
import css from './Appetizers.module.css';
import styles from './Category.module.css';
import logo from '/src/assets/logo2.png';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight';
import { AnimatePages } from '../../AnimatePages';

export const Appetizers = () => {
  const appetizers = [
    {
      title: 'Nachos Supremos',
      desc: 'Crispy tortilla chips topped with melted cheese, black beans, sour cream, guacamole, and pico de gallo',
      price: '$8.99',
    },
    {
      title: 'Ceviche Fresco ',
      desc: 'Fresh fish and shrimp marinated in lime juice, mixed with tomatoes, onions, cilantro, and a hint of jalapeño. Served with tortilla chips.',
      price: '$9.49',
    },
    {
      title: 'Chorizo Quesadillas',
      desc: 'Grilled flour tortillas filled with spicy chorizo sausage and melted cheese. Served with a side of salsa.',
      price: '$7.49',
    },
    {
      title: 'Taquitos Dorados',
      desc: 'Rolled and crispy corn tortillas filled with seasoned shredded chicken, topped with lettuce, queso fresco, and salsa.',
      price: '$6.99',
    },
    {
      title: 'Sopes de Tinga ',
      desc: 'Thick corn tortillas topped with tinga-style shredded chicken, refried beans, lettuce, and crumbled cheese.',
      price: '$7.99',
    },
    {
      title: 'Elote Callejero',
      desc: 'Grilled corn on the cob smothered in a mixture of mayonnaise, cotija cheese, chili powder, and lime juice.',
      price: '$5.99',
    },
    {
      title: 'Con Queso Dip ',
      desc: 'Creamy melted cheese blended with diced green chilies and served with warm tortilla chips.',
      price: '$6.49',
    },
    {
      title: 'Molcajete Guacamole',
      desc: 'Freshly made guacamole served in a traditional stone mortar and pestle, with diced tomatoes, onions, and cilantro.',
      price: '$8.99',
    },
    {
      title: 'Tamales de Rajas ',
      desc: 'Steamed corn masa filled with roasted poblano pepper strips and cheese, wrapped in a corn husk. Served with salsa. ',
      price: '$7.99',
    },
    {
      title: 'Chicharrón de Queso ',
      desc: ' Crispy cheese crisps served with a zesty tomatillo salsa. A cheesy and crunchy delight.',
      price: '$6.99',
    },
  ];

  return (
    <AnimatePages>
      <div className={css.appetizers_page}>
        <Link to='/MexicanRestaurant'>
          <img src={logo} alt='' className={styles.logo} />
        </Link>

        <h1 className={styles.category_title}>Appetizers</h1>

        <div className={`${styles.fl} , ${css.mar}`}>
          <ul className={styles.category_menu}>
            {appetizers.map((appetizer, index) => (
              <li key={index} className={styles.category_menu_item}>
                <h4>
                  {index + 1}. {appetizer.title}
                </h4>
                <p>{appetizer.desc}</p>
                <p>
                  <b>{appetizer.price}</b>
                </p>
                <div className={styles.line}></div>
              </li>
            ))}
          </ul>

          <Link to='/Dishes'>
            <button className={css.toDishes}>
              Main Dishes | <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </AnimatePages>
  );
};

export default Appetizers;
