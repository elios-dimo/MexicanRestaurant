import React from 'react';
import css from './Beverages.module.css';
import styles from './Category.module.css';
import logo from '/src/assets/logo2.png';
import { Link } from 'react-router-dom';
import { AnimatePages } from '../../AnimatePages';
import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft';

export const Beverages = () => {
  const beverages = [
    {
      title: 'Margarita Clásica',
      desc: 'A classic blend of tequila, lime juice, and triple sec. Served on the rocks with a salted rim.',
      price: '$8.99',
    },
    {
      title: 'Horchata ',
      desc: 'A refreshing rice-based drink flavored with cinnamon and vanilla. Served over ice.',
      price: '$3.99',
    },
    {
      title: 'Agua Fresca de Sandía',
      desc: ' Fresh watermelon juice lightly sweetened and served over ice.',
      price: '$3.99',
    },
    {
      title: 'Mexican Iced Tea ',
      desc: ' Hibiscus tea infused with a touch of sweetness, served cold.',
      price: '$3.49',
    },
    {
      title: 'Piña Colada ',
      desc: 'A tropical blend of pineapple juice, coconut cream, and rum. Served blended or on the rocks.',
      price: '$7.49',
    },
    {
      title: 'Mexican Coffee ',
      desc: 'Freshly brewed coffee spiked with Kahlúa and topped with whipped cream.',
      price: '$5.99',
    },
    {
      title: 'Tamarind Margarita ',
      desc: 'A tangy twist on the classic margarita, featuring tamarind pulp and tequila. ',
      price: ' $9.49',
    },
    {
      title: 'Jarritos',
      desc: 'Assorted Mexican sodas in flavors like tamarind, mango, and lime.',
      price: '$2.99',
    },
    {
      title: 'Café de Olla ',
      desc: 'A traditional Mexican coffee brewed with cinnamon and piloncillo (unrefined cane sugar). ',
      price: '$3.99',
    },
    {
      title: 'Mexican Hot Chocolate',
      desc: 'Rich and creamy hot chocolate infused with hints of cinnamon and vanilla. Price: $4.49',
      price: '$4.49',
    },
  ];

  return (
    <AnimatePages>
      <div className={css.bev_page}>
        <Link to='/MexicanRestaurant'>
          <img src={logo} alt='' className={styles.logo} />
        </Link>
        <h1 className={styles.category_title}>Beverages</h1>
        <div className={`${styles.fl} , ${css.mar}`}>
          <Link to='/Dishes'>
            <button className={css.toDishes} type='button'>
              <AiOutlineArrowLeft /> | Main Dishes
            </button>
          </Link>
          <ul className={styles.category_menu}>
            {beverages.map((beverage, index) => (
              <li key={index} className={styles.category_menu_item}>
                <h4>
                  {index + 1}. {beverage.title}
                </h4>
                <p>{beverage.desc}</p>
                <p>
                  <b>{beverage.price}</b>
                </p>
                <div className={styles.line}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatePages>
  );
};

export default Beverages;
