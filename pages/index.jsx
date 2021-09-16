import React from 'react';
import HomeComp from '../components/Home/home';
import styles from './index.module.css';

const Home = () => (
  <>
    <h1 className={styles.home}>Hello World</h1>
    <HomeComp />
  </>
);

export default Home;
