import React from 'react';
import styles from './Category.module.css';
import css from './Dishes.module.css';
import logo from '/src/assets/logo2.png';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft';
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight';
import { AnimatePages } from '../../AnimatePages';

export const Dishes = () => {
  const dishes = [
    {
      title: 'Burrito de Carne Deshebrada ',
      desc: 'Large flour tortilla stuffed with slow-cooked shredded beef, rice, beans, cheese, and salsa.',
      price: '$11.99',
    },
    {
      title: 'Tacos de Pescado ',
      desc: 'Battered and fried fish fillets served in soft corn tortillas with cabbage slaw, chipotle mayo, and a squeeze of lime.',
      price: '$12.49',
    },
    {
      title: 'Enmoladas',
      desc: ' Rolled corn tortillas filled with tender chicken and topped with rich mole sauce, sesame seeds, and crumbled queso fresco.',
      price: '$10.99',
    },
    {
      title: 'Carnitas de Cerdo',
      desc: ' Slow-cooked and tender pork served with warm tortillas, salsa, onions, and cilantro. ',
      price: '$13.99',
    },
    {
      title: 'Barbacoa Tostadas ',
      desc: 'Crispy corn tortillas topped with succulent barbacoa-style shredded beef, refried beans, lettuce, and avocado. ',
      price: '$12.99',
    },
    {
      title: 'Chiles en Nogada',
      desc: 'Roasted poblano peppers stuffed with a mixture of ground meat, dried fruits, and spices, topped with walnut cream sauce and pomegranate seeds. ',
      price: '$14.99',
    },
    {
      title: 'Pollo a la Brasa ',
      desc: 'Grilled marinated chicken served with Mexican rice, black beans, and tortillas. A flavorful and satisfying dish. ',
      price: '$13.49',
    },
    {
      title: 'Tamales Verdes',
      desc: ' Steamed corn masa filled with seasoned chicken, topped with green tomatillo sauce and crumbled queso fresco. ',
      price: '$11.49',
    },
    {
      title: 'Vegetarian Enchiladas ',
      desc: 'Soft corn tortillas filled with sautéed vegetables and cheese, topped with red enchilada sauce and avocado slices.',
      price: ' $10.49',
    },
    {
      title: 'Mole Poblano con Pollo',
      desc: ' Grilled chicken smothered in rich and complex mole sauce made with chocolate, chilies, and spices. Served with rice and tortillas.',
      price: '$14.99',
    },
  ];

  return (
    <AnimatePages>
      <div className={css.dishes_page}>
        <Link to='/MexicanRestaurant'>
          <img src={logo} alt='' className={styles.logo} />
        </Link>

        <h1 className={styles.category_title}>Main Dishes</h1>

        <div className={styles.fl}>
          <Link to='/Appetizers'>
            <button className={css.toApp} type='button'>
              <AiOutlineArrowLeft /> | Appetizers
            </button>
          </Link>

          <ul className={styles.category_menu}>
            {dishes.map((dish, index) => (
              <li key={index} className={styles.category_menu_item}>
                <h4>
                  {index + 1}. {dish.title}
                </h4>
                <p>{dish.desc}</p>
                <p>
                  <b>{dish.price}</b>
                </p>
                <div className={styles.line}></div>
              </li>
            ))}
          </ul>

          <Link to='/Beverages'>
            <button className={css.toBev} type='button'>
              Beverages | <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </AnimatePages>
  );
};

export default Dishes;
